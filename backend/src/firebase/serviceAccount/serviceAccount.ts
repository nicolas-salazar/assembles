const serviceAccount = {
  type: process.env.TYPE,
  authUri: process.env.AUTH_URI,
  tokenUri: process.env.TOKEN_URI,
  clientId: process.env.CLIENT_ID,
  projectId: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
  privateKeyId: process.env.PRIVATE_KEY_ID,
  clientC509CertUrl: process.env.CLIENT_X509_CERT_URL,
  authProviderX509CertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
};

export default serviceAccount;
