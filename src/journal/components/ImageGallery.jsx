import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDeleteImagesById } from "../../store/journal";




export const ImageGallery = ({ images }) => {

  const dispatch = useDispatch();

  const onDeleteImage = ( id ) => {
    dispatch( setDeleteImagesById( id ) );
  }

  return (
    <ImageList
      cols={3}
      gap={7}
      rowHeight={164}
      sx={{
        mb: 0,
        maxHeight: 'calc(100vh - 300px)',
        minHeight: '30vh'
      }}
    >
      {
        images.map((image) => (
          <ImageListItem key={image.id} className="ListImageItem">
            <ImageListItemBar
              className="ImageAction"
              sx={{
                background: 'transparent',
                padding: 1
              }}
              position="top"
              actionIcon={
                <IconButton
                  sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.light' },
                    borderRadius: 0
                 }}
                  aria-label={`Delete ${image.id}`}
                  onClick={ () => onDeleteImage(image.id) }
                >
                  <DeleteOutline />
                </IconButton>
              }
              actionPosition="right">
            </ImageListItemBar>
            <img

              src={`${ image.url }?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${ image.url }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="Imagen de nota"
              loading="lazy"
            />
          </ImageListItem>
        ))
      }
    </ImageList>
  );
}

