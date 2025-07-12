import dotenv from 'dotenv'
dotenv.config();

    const endpoint = process.env.API_SECRET;
    const masterKey = process.env.API_KEY;
    const port = process.env.PORT;


export default {endpoint, masterKey, port};