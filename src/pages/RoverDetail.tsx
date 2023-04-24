import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CircularProgress, CssBaseline, Typography } from '@mui/material';
import { getImages } from '../modules/restApi'
import RoverImageList from '../components/RoverImageList';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useLocation } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { data } from '../roverimages';

import moment from 'moment';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  width: 100%;
`

const RoverDetail = () => {
  let { state } = useLocation();
  console.log('inside rover detail', state.rover)
  const { name } = state.rover;
  const [images, setImages] = useState([])
  const now = moment().format('YYYY-MM-DD');
  const [date, setDate] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  
  const loadImages = () => {
    const fetchDate = moment(date).format('YYYY-MM-DD')
    setImages(data.photos)
    setIsLoading(false)
    // getImages({ rover: state.rover.name, date: fetchDate})
    // .then((data) => {
    //   setImages(data.photos)
    //   setIsLoading(false)
    // })
    // .catch((err) => console.log('something went wrong', err))
  }

  useEffect(() => loadImages(), [date])

  console.log('date', date)
  if (isLoading) return <CircularProgress />
  return (
    <DetailContainer>
      <Typography sx={{pb: 3.0}} variant="h2">{name}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Select Date"
            value={date}
            onChange={(newValue) => {
              console.log('newValue', newValue)
              setDate(newValue.$d)
            }
          }
          />
      </LocalizationProvider>
      <RoverImageList images={images} />
    </DetailContainer>
  )
}

export default RoverDetail;