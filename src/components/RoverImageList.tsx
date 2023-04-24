import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { Camera } from "../interfaces/rover.interface";
interface Image {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
}

const RoverImageList = ({ images }: { images: Image[] }) => {
  const largeScreen = useMediaQuery('(min-width:600px)');

  if (images.length === 0) return <p>No Images found</p>

  return (
    <ImageList sx={{ width: "90vw", height: 'fit-content' }} cols={largeScreen ? 4 : 1} rowHeight={'auto'}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img_src}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img_src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.sol.toString()}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default RoverImageList;
