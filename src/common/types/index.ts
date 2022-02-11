// Person
export interface Address {
  street: string;
  postalCode: string;
  city: string;
}
export interface User {
  firstName: string;
  lastName: string;
  mobilePhone: string;
  email: string;
  civilStatus: string;
  address: Address;
}

export interface PartnerInfo {
  partnerLastname: string;
  partnerName: string;
  partnerPersonalid: string;
}



