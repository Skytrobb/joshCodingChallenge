import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { getImages } from '../modules/restApi'
import RoverImageList from '../components/RoverImageList';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Spinner from '../components/Spinner';
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
  const { state } = useLocation();
  const today = moment().format('YYYY-MM-DD')
  const { name } = state.rover;
  const [images, setImages] = useState([])
  const [date, setDate] = useState<moment.Moment | string>(today)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDate = moment(date).format('YYYY-MM-DD')
    // This is for getting the local photo data because 
    // I was hitting rate limit with NASA API

    // setImages(data.photos)
    // setIsLoading(false)
    getImages({ rover: state.rover.name, date: fetchDate})
    .then((data) => {
      setImages(data.photos)
      setIsLoading(false)
    })
    .catch((err) => console.log('something went wrong', err))
  }, [date])

  if (isLoading) return <Spinner />
  return (
    <DetailContainer>
      <Typography sx={{pb: 3.0}} variant="h2">{name}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Select Date"
            value={date}
            onChange={(newValue) => setDate(newValue.$d ?? today)
          }
          />
      </LocalizationProvider>
      <RoverImageList images={images} />
    </DetailContainer>
  )
}

export default RoverDetail;