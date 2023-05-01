import { getEnvironments } from "./getEnvironments";

export const fileDelete = async( file ) => {

  if( !file ) throw new Error('No hay ningún archivo para eliminar');
  const {
    VITE_CLOUDINARY,
    VITE_CLOUDINARY_API_KEY,
    VITE_CLOUDINARY_SECRET_KEY
  } = getEnvironments();

  // DATA 
  const timestamp = `${ new Date().getTime() }`;
  const signature = new TextEncoder().encode(`public_id=${ file }&timestamp=${ timestamp }${ VITE_CLOUDINARY_SECRET_KEY }`);
  const shaCode = await crypto.subtle.digest('SHA-256', signature);
  const hashArray = Array.from(new Uint8Array(shaCode));
  const hashSignature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const formData = new FormData();
  formData.append( 'public_id', file );
  formData.append( 'timestamp', timestamp );
  formData.append( 'signature', hashSignature );
  formData.append( 'api_key', VITE_CLOUDINARY_API_KEY );


  try {

    const resp = await fetch( VITE_CLOUDINARY + '/image/destroy', {
      method: 'POST',
      body: formData
    });

    return resp.ok;
    
  } catch (error) {

    throw new Error( error.message );

  }
  
  
}