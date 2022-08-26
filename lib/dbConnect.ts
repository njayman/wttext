import mongoose, { Mongoose } from 'mongoose';

declare global {
    var mongoose: any
}

const MONGODB_URL: string = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}



let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

/* const connectDB = (handler: any) => (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (cached.conn) {
            return cached.conn;
        }
        if (mongoose.connections[0].readyState) {
            // Use current db connection
            return handler(req, res);
        }
        // Use new db connection
        mongoose.connect(MONGODB_URL);
        return handler(req, res);
    } catch (error) {
        throw error;
    }
}; */

const connectDB = async (): Promise<Mongoose> => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
