import { ImageList, ImageListItem } from "@mui/material";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImageGallery = ({ images }) => {
  return (
    <ImageList
      cols={3}
      gap={7}
      rowHeight={164}
      sx={{ mb: 0, maxHeight: 'calc(100vh - 300px)'}}
    >
      {
        images.map((image) => (
          <ImageListItem key={image.id}>
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

