const baseHost = 'http://192.168.1.65:32769/api/';

export const environment = {
  production: false,
  environmentName: 'Support',
  companyApiBaseUrl: `${baseHost}`,
  baseUrls: {
    accounts: `${baseHost}accounts`,
    companies: `${baseHost}companies`,
    orders: `${baseHost}orders`,
    openorders: `${baseHost}openorders`,
    products: `${baseHost}products`,
    carts: `${baseHost}carts`,
    auth: `${baseHost}auth`
  }
};
