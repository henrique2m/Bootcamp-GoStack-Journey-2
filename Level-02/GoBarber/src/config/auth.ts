interface IJWT {
  jwt: {
    secret: string;
    expiresIn: string | '1d';
  };
}

export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '1d',
  },
} as IJWT;
