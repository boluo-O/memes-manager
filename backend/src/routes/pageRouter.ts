import { Router } from 'express'

const pageRouter: Router = Router()

// home
pageRouter.get('/', (req, res) => {
    res.send('home page')
})

export default pageRouter
