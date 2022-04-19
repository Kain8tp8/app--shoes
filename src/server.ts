import express from 'express'
import cors from 'cors'
import shoesRoutes from './routers/shoes.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/shois',shoesRoutes)


app.listen(2488, () => console.log('Server is running on http://localhost:2488'))



