import * as dotenv from 'dotenv';
dotenv.config();

const privateKey = process.env.PRIVATE_KEY || '';

const serviceAccount = {
  type: process.env.TYPE,
  authUri: process.env.AUTH_URI,
  tokenUri: process.env.TOKEN_URI,
  clientId: process.env.CLIENT_ID,
  projectId: process.env.PROJECT_ID,
  clientEmail: process.env.CLIENT_EMAIL,
  privateKeyId: process.env.PRIVATE_KEY_ID,
  privateKey: privateKey.replace(/\\n/g, '\n'),
  clientC509CertUrl: process.env.CLIENT_X509_CERT_URL,
  authProviderX509CertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
};

export default serviceAccount;
