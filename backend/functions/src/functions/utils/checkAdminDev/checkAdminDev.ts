import { ENVIRONMENT, ERROR_HANDLE } from '../../../constants';

const checkAdminDev = (key: string): any => {
  if (process.env.ENV === ENVIRONMENT.Develop) {
    return;
  }

  if (process.env.ADMIN_DEV_KEY === key) {
    return;
  }

  return ERROR_HANDLE.UnAuth();
};

export default checkAdminDev;
