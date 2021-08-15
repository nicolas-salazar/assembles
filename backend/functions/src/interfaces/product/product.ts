/* eslint-disable semi */
export default interface IProduct {
  id: string;
  name: string;
  createdAt?: Date;
  isMock?: boolean;
  available: number;
  createdBy?: string;
  lastUpdatedAt?: Date;
  lastUpdatedBy?: string;
  childReference?: Array<any>;
  parentReference?: Array<any>;
}
