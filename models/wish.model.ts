import { Schema, model, Types, models } from "mongoose";

export interface IWish {
  content: string;
  user?: Types.ObjectId;
  wishId: string;
  expireAt: Date;
}

const WishSchema: Schema = new Schema<IWish>(
  {
    content: {
      type: String,
      required: true,
    },
    wishId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
    },
    expireAt: { type: Date, default: Date.now, expires: 604800 },
  },
  {
    timestamps: true,
  }
);

// WishSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 })

const WishModel = models["Wish"] || model<IWish>("Wish", WishSchema);

export default WishModel;
