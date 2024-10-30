import { Request, Response } from 'express'
import helpers from '../../utils/helpers'

async function getHerd(req: Request, res: Response): Promise<any> {
	try {
		const day = +req.params.day

    const data = helpers.getStock(day)
    return res.json({herd: data.herd})
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

const controllers = {
	getHerd
}

export default controllers
