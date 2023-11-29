import {getAllCategory} from './utlis/category_api'

export default async function handler(req, res) {
    try {
        const response = await getAllCategory();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}