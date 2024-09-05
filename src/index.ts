import express, { Express,Request,Response } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Product from "../models/products.model"
import productRoute from "../routes/product.route"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000;

app.use(express.json())


// routes
app.use('/api/products', productRoute)

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@nodejs-mongodb.nofpy.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-mongodb`).then( () => {
    console.log("Connected to db");
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}).catch( (err) => {
    console.log('Connection failed!!!',err);
    
})