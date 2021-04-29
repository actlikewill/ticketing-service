import request from 'supertest'
import { app } from '../../app'

describe ('SIGNIN ROUTE', () => {
    it ('fails with an email that does not exist', async () => {
        await request(app)
            .post('/api/users/signin')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(400)
    })

    
    it ('fails with an invalid password', async () => {
        await request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(201)

        await request(app)
            .post('/api/users/signin')
            .send({
                email: 'test@test.com',
                password: 'invalidpassword'
            })
            .expect(400)
    })


    it ('returns a cookie with valid credentials', async () => {
        await request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(201)

        const response = await request(app)
            .post('/api/users/signin')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(200)

        expect(response.get('Set-Cookie')).toBeDefined()

    })
})
