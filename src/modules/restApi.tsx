import axios from 'axios';
import { GetRoversResponse, Rover } from '../interfaces/rover.interface';

const API_KEY = 'DEMO_KEY'
const BASE_URL = 'https://api.nasa.gov'

export const getRovers = () => {
  return axios.get<GetRoversResponse>(`${BASE_URL}/mars-photos/api/v1/rovers/?api_key=${API_KEY}`)
    .then((response) => {
      console.log('data', response.data);
      return response.data.rovers;
    }).catch((err) => {
      console.log('err', err)
      throw err;
    })
}