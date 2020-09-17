const supertest = require('supertest')
const server = require('./server')

describe('server', function () {
    test('runs the tests', function () {
        expect(true).toBe(true)
    })

    describe('GET /', function () {
        test('should respond with 200 ok', function () {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })


        test('should respond with JSON', function () {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
        test('should respond with JSON', function () {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
        test(`should respond with api: 'up'`, function () {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body.api).toBe(`up`)
                })
        })
    })
    describe('GET /hobbits', function () {
        test('should respond with 200 ok', function () {
            return supertest(server)
                .get('/hobbits')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
})