// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reservation, Customer } = initSchema(schema);

export {
  Reservation,
  Customer
};