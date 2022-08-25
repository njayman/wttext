// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { HydratedDocument } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import WishModel, { IWish } from '../../models/wish.model'
import connectDB from '../../middleware/mongodb';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const wish: HydratedDocument<IWish> = new WishModel(req.body);
        await wish.save();
        res.status(200).json(wish);
    } catch (error: any) {
        res.status(500).send(error.mesage || 'An error occured')
    }
}

export default connectDB(handler);
