// export * from './errorHandler'
// export * from './notFoundHandler'

const path = require('path')
const testFolder = path.resolve(__dirname, './')
const fs = require('fs');

fs.readdirSync(testFolder).forEach((file: any) => {
    require(file)
});