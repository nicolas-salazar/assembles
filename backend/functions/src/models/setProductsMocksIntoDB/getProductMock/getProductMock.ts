import * as faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../../../interfaces';

const getProductMock = (quantity?: number): Array<IProduct> => {
  const mocks = [];
  const length = quantity || 1;
  for (let index = 0; index < length; index++) {
    mocks.push({
      id: uuidv4(),
      name: faker.commerce.productName(),
      available: 0,
      createdAt: new Date(),
      createdBy: 'Mocker function',
      lastUpdatedAt: new Date(),
      lastUpdatedBy: 'Mocker function',
    });
  }
  return mocks;
};

export default getProductMock;
