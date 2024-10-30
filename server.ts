import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './src/utils/config';

config.initFileSetup()

let app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/yak-shop', (req, res) => {
	res.json({ message: 'server running' })
})

app.use('/yak-shop/stock', require('./src/api/stock/routes'))
app.use('/yak-shop/herd', require('./src/api/herd/routes'))

app.all('*', (req, res) => {
	res.status(405).json({ message: 'route not implemented' })
})

app.listen(5000, async () => {
	console.log('server started!')
})
