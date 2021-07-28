import { ENVIRONMENT, ERROR_HANDLE } from '../../../constants';

const checkAuth = (context: any) => {
  if (process.env.ENV !== ENVIRONMENT.Develop) {
    if (!context?.auth) {
      ERROR_HANDLE.UnAuth();
    }
  }
  return;
};

export default checkAuth;
