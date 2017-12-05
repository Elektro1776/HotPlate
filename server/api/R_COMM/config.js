require('dotenv').config();

const config = {
  OC: {
    base_url: process.env.OC_API,
    api_key: process.env.OC_API_KEY,
  },
};
export default config;
