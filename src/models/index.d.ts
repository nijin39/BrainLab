import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Reservation {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly reason?: string;
  readonly gender?: string;
  readonly reservationTime?: string;
  readonly customerID?: string;
  readonly reservationDate?: string;
  constructor(init: ModelInit<Reservation>);
  static copyOf(source: Reservation, mutator: (draft: MutableModel<Reservation>) => MutableModel<Reservation> | void): Reservation;
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly email?: string;
  readonly gender?: string;
  readonly Reservations?: (Reservation | null)[];
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}