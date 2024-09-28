import {ErrorType} from './enums';

interface apiParamsType {
  method: string;
  endPoint: string;
  data?: any;
}
interface apiResponseType {
  status: boolean;
  statusMessage?: ErrorType;
  data?: any;
}
