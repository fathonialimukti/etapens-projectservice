
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import studentRoute from './routes/student.js'
import adminRoutes from './routes/admin.js'
import indexRoute from './routes/index.js'
import errorHandler from './middleware/error.js'
import morganMiddleware from './utils/morgan.js'
import logger from './utils/logger.js'
import lecturerRoute from './routes/lecturer.js'

const app = express()

app.use( express.json( { limit: '30mb', extended: true } ) )
app.use( express.urlencoded( { limit: '30mb', extended: true } ) )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )
app.use( cors() )
app.use( morganMiddleware )

app.use( '/', indexRoute )
app.use( '/student', studentRoute )
app.use( '/admin', adminRoutes )
app.use( '/lecturer', lecturerRoute )
app.use( errorHandler )

const port = process.env.PORT || 4000

app.listen( port, () =>
  logger.info( `🚀 Server ready at: http://localhost:${ port } ⭐️ `),
)
