import axios from 'axios';
import express from 'express'

const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})


router.get('/test', async (req, res) => {
    const response = await axios('http://residents-service')
    res.json(response.data)
})


export default {
  path: '/api',
  handler: router
}
