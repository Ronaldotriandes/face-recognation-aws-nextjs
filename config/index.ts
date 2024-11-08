
import dotenv from 'dotenv';

dotenv.config();

const config = {
    region : process.env.REGION,
    credential: {
        acessKey : process.env.CREDENTIALS_ACCESSKEY || '',
        secretAccessKey: process.env.CREDENTIALS_SECRETACCESSKEY || ''
    },
    collectionId: process.env.COLLECTIONID
}

export default config