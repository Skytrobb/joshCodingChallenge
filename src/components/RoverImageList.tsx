import { ImageList, ImageListItem } from "@mui/material";

const RoverImageList = ({ images }) => {
  if (images.length === 0) return <p>No Images found</p>
  return (
    <ImageList sx={{ width: 1000, height: 450 }} cols={5} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img_src}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img_src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.sol}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default RoverImageList;
