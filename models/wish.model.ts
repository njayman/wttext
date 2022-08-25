import { Schema, model, Types } from 'mongoose';

export interface IWish {
    content: string,
    user?: Types.ObjectId
}

const WishSchema: Schema = new Schema<IWish>({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
    }
}, {
    timestamps: true
})

const WishModel = model<IWish>('Wish', WishSchema);

export default WishModel;
