declare namespace NodeJS {
  export interface ProcessEnv {
    ENV: string;
    TYPE: string;
    AUTH_URI: string;
    CLIENT_ID: string;
    TOKEN_URI: string;
    PROJECT_ID: string;
    PRIVATE_KEY: string;
    CLIENT_EMAIL: string;
    PRIVATE_KEY_ID: string;
    CLIENT_X509_CERT_URL: string;
    AUTH_PROVIDER_X509_CERT_URL: string;
  }
}
