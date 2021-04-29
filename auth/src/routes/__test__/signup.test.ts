import request from 'supertest'
import { app } from '../../app'

describe('SIGNUP ROUTE', () => {
    it('returns 201 status on successful signup', async () => {
        return request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(201)
    })

    it('returns 400 with invalid email', async () => {
        return request(app)
            .post('/api/users/signup')
            .send({
                email: 'invalidemail',
                password: 'password'
            })
            .expect(400)
    })

    it('returns 400 with invalid password', async () => {
        return request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'p'
            })
            .expect(400)
    })


    it('returns 400 with no email and password', async () => {
        return request(app)
            .post('/api/users/signup')
            .send({})
            .expect(400)
    })

    it('disallows duplicate emails', async () => {

        await request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(201)

        await request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(400)
    })

    it('sets a cookie after succesful signup', async () => {

        const response = await request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(201)

        expect(response.get('Set-Cookie')).toBeDefined()
    })
})

