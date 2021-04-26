import express from 'express'
import 'express-async-errors'
import routes from './routes'
import * as middleware from './middleware'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import chalk from 'chalk'

const app = express()
app.set('trust proxy', true)
app.use(express.json())

app.use(
    cookieSession({
        signed: false,
        secure:true
    })
)

routes.forEach(route => {
    app.use(route)
});

app.use(middleware.notFoundHandler)

app.use(middleware.errorHandler)

const init = async () => {

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }

    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
    .then(() => console.log(chalk.greenBright('🔥Auth DB Connected🔥')))
    .catch((e) => console.log(chalk.green('Auth DB Connection Error'), e))

    app.listen(3000, () => {
        console.log('Auth Service Listening on port 3000!!!'); 
    }) 
}

init ()