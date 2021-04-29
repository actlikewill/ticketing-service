import mongoose from 'mongoose'
import chalk from 'chalk'
import { app } from './app'


;( async () => {

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
        console.log('Auth Service Listening on port 3000!'); 
    }) 
})()