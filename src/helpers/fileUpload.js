import { getEnvironments } from "./getEnvironments";

export const fileUpload = async( file ) => {

  if( !file ) throw new Error('No tenmos ningún archivo para subir');

  const { VITE_CLOUDINARY, VITE_CLOUDINARY_PRESET } = getEnvironments();

  const formData = new FormData();
  formData.append( 'upload_preset', VITE_CLOUDINARY_PRESET );
  formData.append( 'file', file );

  try {

    const resp = await fetch( VITE_CLOUDINARY, {
      method: 'POST',
      body: formData
    });

    if( !resp.ok ) throw new Error('No se pudo subir la imagen');

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
    
  } catch (error) {

    console.log(error);
    throw new Error( error.message );

  }
  
}