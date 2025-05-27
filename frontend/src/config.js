const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://bespoke-gaufre-80aa97.netlify.app/.netlify/functions/api'
    : 'http://localhost:5000/api'
};

export default config; 