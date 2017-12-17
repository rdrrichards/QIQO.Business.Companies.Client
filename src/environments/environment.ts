// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const baseHost = 'http://192.168.1.65:32769/api/';

export const environment = {
  production: false,
  environmentName: 'Developement',
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
