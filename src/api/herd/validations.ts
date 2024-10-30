import type { NextFunction, Request, Response } from 'express';

async function validateDay(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const day = +req.params.day
    if(Number.isNaN(day)) {
      return res.status(400).json({message: 'day is not a valid number'})
    }

    if(!Number.isInteger(day) || day < 0) {
      return res.status(400).json({message: 'day must be a natural number'})
    }

    return next()
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'server error'})
  }
}

const validations = {
  validateDay
}

export default validations