const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://one-note-main-02.vercel.app/api'  // Replace with your actual Vercel deployment URL
    : 'http://localhost:5000/api'
};

export default config; 