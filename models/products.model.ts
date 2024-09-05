import { model, Schema } from "mongoose";

interface IProduct {
    name: string,
    quantity: number,
    price: number,
    image?: string,
}

const productSchema = new Schema<IProduct>(
    {
        name: { 
            type:  String,
            required: [true, 'Name is required'] 
        },
        quantity: { 
            type:  Number,
            required: true, 
            default:0 
        },
        price: { 
            type:  Number,
            required: true,
            default:1 
        },
        image: String
    },
    {
        timestamps: true
    }
)

export default model<IProduct>('Product',productSchema);
