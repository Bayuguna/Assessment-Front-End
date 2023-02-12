import axios from 'axios';
import Constant from '../../domain/helpers/constant';
// import { authToken } from '../helpers/globals';

type AxiosParams = {
  activeUrl?: string | null
}

function AxiosClient(params?: AxiosParams) {
  return axios.create({
    baseURL: `${params?.activeUrl ? '' : Constant.BASE_URL}api/`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : `Bearer ${Constant.SECRET_KEY}`
    },
    timeout: 10000,
    validateStatus: (status: number) => status >= 200 && status <= 500,
  });
}

export default AxiosClient;


