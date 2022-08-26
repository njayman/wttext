// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { HydratedDocument } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import WishModel, { IWish } from '../../models/wish.model'
import crypto from 'crypto';
import connectDB from '../../lib/dbConnect';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ wishId: string }>
) {
    try {
        await connectDB();
        const wishId = crypto.randomBytes(6).toString('hex');
        const wish: HydratedDocument<IWish> = new WishModel({ ...JSON.parse(req.body), wishId });
        await wish.save();
        res.status(200).json({ wishId: String(wish.wishId) });
    } catch (error: any) {
        res.status(500).send(error.message || 'An error occured')
    }
}

export default handler;
