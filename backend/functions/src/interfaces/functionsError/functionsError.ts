import { FunctionsErrorCode } from 'firebase-functions/lib/providers/https';

export default interface IFunctionsError {
  code?: FunctionsErrorCode;
  message?: string;
}
