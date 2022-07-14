import dotenv from 'dotenv'

// read the .env file
dotenv.config()

export default {
    databaseUrl:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/mevnmongo',
}
