import { Request,Response } from "express"
import Product from "../models/products.model"


export const addProduct = async (req: Request, res: Response) => { 
    try {
        const product = await Product.create(req.body)
        res.json({message:"Added Successfully", product: product});
    } catch (error:any) {
        res.status(500).json({ error: error.message })
    }
}

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({})
        res.json(products);
    } catch (error:any) {
        res.status(500).json({ error: error.message })
    }
}

export const getProductById = async (req: Request, res: Response) => { 
    const { id } = req.params;
    try {
        const product = await Product.findById(id)
        res.json(product);
    } catch (error:any) {
        res.status(500).json({ error: error.message })
    }
}


export const updateProductById = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const body = req.body
    try {
        const product = await Product.findByIdAndUpdate(id,body)

        if(!product) {
            return res.status(404).json({ message: "Product not found!"})
        }

        const updatedProduct = await Product.findById(id)
        res.json(updatedProduct);

    } catch (error:any) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteProduct = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const body = req.body
    try {
        const product = await Product.findByIdAndDelete(id)

        if(!product) {
            return res.status(404).json({ message: "Product not found!"})
        }

        res.status(200).json({ message: 'Deleted Successfully!'});

    } catch (error:any) {
        res.status(500).json({ error: error.message })
    }
}