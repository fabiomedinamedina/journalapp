import { fileDelete } from "../../src/helpers";

describe('Pruebas en fileDelete', () => {


  // test('Debería eliminar la imagen correctamente', async() => {

  //   const id = 'journal/backtexture_aosne0';
  //   const resp = await fileDelete( id );
  //   expect( resp ).toBe( false );
  //   console.log(globalThis);
    
  // });

  test('Debería mostrar error si no se envia ningún ID', async() => {

    await expect( fileDelete() ).rejects.toThrowError( 'No hay ningún archivo para eliminar' );

  });

})