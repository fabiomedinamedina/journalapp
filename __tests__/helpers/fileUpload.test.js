import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers";

cloudinary.config({
  cloud_name: 'fmm',
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_SECRET_KEY,
  secure: true
});


describe('Pruebas en fileUpload', () => {

  test('Debería subir el archivo correctamente a Cloudinary', async() => {
    
    const imageUrl = 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200';
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File( [blob], 'foto-demo.jpg' );

    const { id, url } = await fileUpload( file );
    expect( typeof id ).toBe( 'string' );
    expect( typeof url ).toBe( 'string' );
    await cloudinary.api.delete_resources([ id ]);

  }, 11000);

  test('Debería retornar error', async() => {
    const file = new File( [], 'foto-demo.jpg' );

    // const imageUploaded = await fileUpload( file );
    // expect( imageUploaded ).toBe( null );
    await expect( fileUpload(file) ).rejects.toThrowError( 'No se pudo subir la imagen' );

  });

  test('Debería retornar error diciendo que no hay archivo', async() => {

    await expect( fileUpload() ).rejects.toThrowError( 'No hay ningún archivo para subir' );

  });

})