import {getAllProducts} from "./utlis/product_api";

export default async function handler(req, res) {
    try {
        const response = await getAllProducts();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}