import { Request, Response } from 'express'
import helpers from '../../utils/helpers'

async function getStock(req: Request, res: Response): Promise<any> {
	try {
		const day = +req.params.day

    const data = helpers.getStock(day)
    return res.json(data.stock)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

const controllers = {
	getStock
}

export default controllers
