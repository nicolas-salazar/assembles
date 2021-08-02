import { ENVIRONMENT, ERROR_HANDLE } from '../../../constants';

const checkAuth = (context: any): any => {
  if (process.env.ENV === ENVIRONMENT.Develop) {
    return;
  }

  if (context?.auth) {
    return;
  }

  return ERROR_HANDLE.UnAuth();
};

export default checkAuth;
