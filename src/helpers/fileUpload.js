import { getEnvironments } from "./getEnvironments";

export const fileUpload = async( file ) => {

  if( !file ) throw new Error('No tenmos ningún archivo para subir');

  const { VITE_CLOUDINARY, VITE_CLOUDINARY_PRESET } = getEnvironments();

  const formData = new FormData();
  formData.append( 'upload_preset', VITE_CLOUDINARY_PRESET );
  formData.append( 'file', file );

  try {

    const resp = await fetch( VITE_CLOUDINARY + '/upload', {
      method: 'POST',
      body: formData
    });

    if( !resp.ok ) throw new Error('No se pudo subir la imagen');
    const cloudResp = await resp.json();
    return {
      id: cloudResp.public_id,
      url: cloudResp.secure_url
    };
    
  } catch (error) {

    throw new Error( error.message );

  }
  
}