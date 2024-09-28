import axios from 'axios';
import {apiMethods, getBaseURL, statusCode} from './ApiConstants';
import {ErrorType} from '../../types/enums';
import {apiParamsType, apiResponseType} from '../../types/ApiTypes';
export const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {},
});

axiosInstance.interceptors.request.use(
  async config => {
    let token = await getData('token');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  request => {
    return request;
  },
);

axiosInstance.interceptors.response.use(
  async request => {
    return request;
  },
  async error => {
    return error.response;
  },
);

export const apiCall = async (
  params: apiParamsType,
  headers?: any,
  timeout: number = 10000,
): Promise<apiResponseType> => {
  switch (params.method) {
    case apiMethods.GET: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        timeout: timeout,
        headers: headers,
      });
      return checkResponse(response);
    }
    case apiMethods.POST: {
      const response = await axiosInstance({
        method: params.method,
        url: params.endPoint,
        data: params.data,
        headers: headers,
        timeout: timeout,
      });

      return checkResponse(response);
    }

    default: {
      return {status: false};
    }
  }
};

export const checkResponse = async (response: any) => {
  if (
    (response.status && response.status === statusCode.internal_server_error) ||
    response.status === statusCode.bad_request ||
    response.status === statusCode.not_found
  ) {
    return {status: false, statusMessage: ErrorType.someThingWentwrong};
  } else if (response.status === statusCode.unauthorized_user) {
    return {status: false, statusMessage: ErrorType.unauthorizedUser};
  } else if (response.status === statusCode.success) {
    return {status: true, data: response.data};
  } else {
    return {status: false, statusMessage: ErrorType.someThingWentwrong};
  }
};
function getData(arg0: string) {
  throw new Error('Function not implemented.');
}
