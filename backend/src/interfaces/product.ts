export interface IProduct {
  id: string;
  name: string;
  available: number;
  parentReference?: Array<any>;
  childReference?: Array<any>;
  createdAt?: Date;
  createdBy?: string;
  lastUpdatedAt?: Date;
  lastUpdatedBy?: string;
}
