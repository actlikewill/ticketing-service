import request from 'supertest'
import { app } from '../../app'

describe('CURRENT USER ROUTE', () => {
    it ( 'responds with details about currentuser', async () => {

        const cookie = await global.signin()

        const response = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .expect(200)
        
        expect(response.body.currentUser.email).toEqual('test@test.com')

    })

    it('responds with null if not authenticated', async () => {

        const response = await request(app)
        .get('/api/users/currentuser')
        .expect(200)

        expect(response.body.currentUser).toEqual(null)
    })
})