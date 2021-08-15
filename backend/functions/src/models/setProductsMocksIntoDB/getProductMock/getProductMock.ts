import * as faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../../../interfaces';

const getProductMock = (
  quantity?: number,
): { parents: Array<IProduct>; childs: Array<IProduct> } => {
  const childs = [];
  const parents = [];
  const length = quantity || 1;
  for (let index = 0; index < length; index++) {
    parents.push({
      id: uuidv4(),
      available: 1,
      isMock: true,
      childReference: [],
      parentReference: [],
      createdAt: new Date(),
      lastUpdatedAt: new Date(),
      createdBy: 'Mocker function',
      lastUpdatedBy: 'Mocker function',
      name: faker.commerce.productName(),
    });
    childs.push({
      id: uuidv4(),
      available: 2,
      isMock: true,
      childReference: [],
      parentReference: [],
      createdAt: new Date(),
      lastUpdatedAt: new Date(),
      createdBy: 'Mocker function',
      lastUpdatedBy: 'Mocker function',
      name: faker.commerce.productName(),
    });
  }
  return { parents, childs };
};

export default getProductMock;
