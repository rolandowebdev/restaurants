import { RestaurantsApiUrl } from '@/constants'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: RestaurantsApiUrl.baseUrl
})
