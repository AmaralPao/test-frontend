
import express from 'express'
import { router as itemsRouter } from './routes/item.js'
import cors from 'cors'

const port = 8080
const app = express()

//cors
app.use(cors())
// Routes
app.use('/api/items', itemsRouter);


// Port is 8080 in order to allow react to run on port 3000
let server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
