import axios, { AxiosResponse } from 'axios';
import Constant from './constant';

export default class ApiHandler {
  static errorHandler(error: any): Error {
    if (axios.isAxiosError(error)) {
      if (error.message === 'Network Error') {
        return new Error(Constant.CHECK_CONNECTION_MESSAGE);
      }
      return new Error(error.message);
    }

    if (error instanceof Error) {
      return error;
    }

    return new Error(Constant.ERROR_MESSAGE);
  }

  static notResponse200Handler(response: AxiosResponse): Error {
    if (response.status === Constant.HTTP_UNAUTHORIZED) {
      return new Error(Constant.UNAUTHORIZED_MESSAGE);
    }

    if (response.status === Constant.HTTP_BAD_REQUEST) {
      return new Error(response?.data?.message ?? Constant.SERVER_ERROR_MESSAGE);
    }


    return new Error(Constant.SERVER_ERROR_MESSAGE);
  }
}
