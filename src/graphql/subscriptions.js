/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
      id
      reservationDate
      reservationTime
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
      id
      reservationDate
      reservationTime
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
      id
      reservationDate
      reservationTime
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      name
      email
      gender
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Reservations {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      name
      email
      gender
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Reservations {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      name
      email
      gender
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Reservations {
        nextToken
        startedAt
      }
    }
  }
`;
