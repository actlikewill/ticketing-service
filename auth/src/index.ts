import express from 'express'
import routes from './routes'
import * as middleware from './middleware'

const app = express()

app.use(express.json())

routes.forEach(route => {
    app.use(route)
});

app.use(middleware.notFoundHandler)

app.use(middleware.errorHandler)


app.listen(3000, () => {
    console.log('Auth Service Listening on port 3000!!!'); 
}) 