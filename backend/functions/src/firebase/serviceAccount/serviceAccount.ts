import * as dotenv from 'dotenv';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY || '';

// const serviceAccount = {
//   type: 'service_account',
//   authUri: 'https://accounts.google.com/o/oauth2/auth',
//   tokenUri: 'https://oauth2.googleapis.com/token',
//   clientId: '101589085897496901998',
//   projectId: 'assembles-757f3',
//   clientEmail: 'firebase-adminsdk-w94eo@assembles-757f3.iam.gserviceaccount.com',
//   privateKeyId: '5e3555bc99dfb38c308d3396319abc4e3028e667',
//   privateKey:
// eslint-disable-next-line max-len
//     '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCtHY8+nBaYcyr3\nC9XFPfBUxiRinoNGmGeVo0n0I4XaOsSX9pc4FQ+nzMK2nsiz6RTQg04aDyQ3KX45\nbrx+SLB/VdZTj980ZqFU3Qdk68e1yx7v0RxIqUbKl5210+N3uQ3lXepfHtoIRix0\nsdAK+O4xqwcJU/5eddlTOFSM7KDRztmTezSX0WRQzdIjzL/v300Zu/EWZv2cGu1X\ny88358dIXe3ppJPRTyIrKaqYn319vpZuSKw6ZwQcr43ZVS3rRlVbiAfN2W1ySU2U\nnbO9NlMfnzFE79oHlPGY0ZXeNKDR2VddYg+/A2GcP++skgZ3r37qXfThyC0xXvlP\n58deId8tAgMBAAECggEADKt/quDopHK1X8xdcmikmMfBrPgV+oo39pMzW+tnpf+s\nGMUi7ydXdHv/ejcn0EcMT3B0vGKET4c5ZkGtCP8P79nb7FS4zNCAGUJuApxhCvSZ\nSIsA6258MGKlV8Pwv3frRPC5MQoEghuEsGu9IrhyUm9Gfg/IK6irZbRXN9Mvt/sx\nG8KQOybucpElo44UPYuiuS6FqPBOshKqq7opMN8ueQqGQtxzQPDfRL/yQFExwBDa\nQcu6UEb28e9I0f9VZkAXdlFWn1NBHROhSVigSxUfeTaJ5HniOmQXaMN+LMA1H4R3\n7qryVS2eHKd+gFGlTngN7foYEDBu23VOthbLADd7AQKBgQDsHHzuR9cVix+FVuic\nr265k4X2weQV0d2skXuJ1bXn0pdk5TEvd2IJXU/j1jmc1nWjtCs2+duiDo6eE17A\njiM8/99g9OVz9T+h19TrKsRynium44ovSkwGFp/lBjEPDOvyQABZGRffskErnsJI\nEFZU6Ptuy5sVSdOi11/zaCocgQKBgQC7sqCpA0zDNC7c3jLmPZdIkptXF9sEDpb8\nRuxIUTqwBuUTH8rxa4FvEuclZqdqQooSXmwfdLpJDj/1fup6MgNGISxngzeS46jc\nYzQiYuvbNDHA7RWSLGpeSxes0+/vZhtMPGyTH0qFcuOrzmW9Yi25d+WM7gpYdslf\nvIbPIU6crQKBgQCrj7enXEQIv2JT/OZgk4idB3ib6B7XS/sK3VsquELJA9hF09N9\nbf2qWEcoggyyzZIFNXEBLWRNyM4QRnre52jrdfDV/pyLOXTXIIDxr822iv+k8EkE\nO7Qp6F6eh3U2PmljSOX316flPxzjmSQKQPS6FeA8jW1Odqp09JIfx1xyAQKBgQCC\npCbc3HYeXADOLD4DMRVOJvTGHs2LOlhuyTKGdztA79ubfwJzHJ+fXunRh2y5Mg0G\nEgBxuH48gRWVWrv7RzouIsLUXWld7OVIWCgeUvnUvbRvktTzw8RZUyzsVytmVoxj\neJ8dm6bz0W6T03nO4jnvIHt+puQ+hJdO8lpmaslblQKBgQCLU4j+UC9rvzUw+Ka9\nvMhBiaxGaAtB2g/772YoISqV2v0yv/wjDmMAPPW1va2Z4I3jSyW8UB02+ebb0mF3\npo7QeyaC6beFxqIO/yIpt9TsE+kEsSf/63t1CHH4Dc2VHERUsXVx12YZyWTNEQF+\n83PbKOKKnVBToY9yKgOzYx0Owg==\n-----END PRIVATE KEY-----\n',
//   clientC509CertUrl:
//     'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w94eo%40assembles-757f3.iam.gserviceaccount.com',
//   authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
// };

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
