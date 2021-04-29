import express from 'express'
import 'express-async-errors'
import routes from './routes'
import * as middleware from './middleware'
import cookieSession from 'cookie-session'

const app = express()
app.set('trust proxy', true)
app.use(express.json())

app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
)

routes.forEach(route => {
    app.use(route)
});

app.use(middleware.notFoundHandler)

app.use(middleware.errorHandler)

export { app }