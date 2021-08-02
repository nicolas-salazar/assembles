import * as functions from 'firebase-functions';
import { IFunctionsError } from '../../interfaces';

export enum ERROR_CODES {
  UnAuth = 'unauthenticated',
  Unknown = 'unknown',
}

export enum ERROR_MESSAGES {
  UnAuth = 'You are not authenticated 💔',
  Unknown = 'An unknown error has occurred 💔',
}

const ERROR_HANDLE = {
  UnAuth: () => {
    throw new functions.https.HttpsError(ERROR_CODES.UnAuth, ERROR_MESSAGES.UnAuth);
  },
  unknown: (error: IFunctionsError, customMessage?: string) => {
    throw new functions.https.HttpsError(
      error.code || ERROR_CODES.Unknown,
      error.message || customMessage || ERROR_MESSAGES.UnAuth
    );
  },
};

export default ERROR_HANDLE;
