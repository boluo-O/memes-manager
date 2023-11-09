import MemesController from '../controllers/MemesController'
import { Router } from 'express'

const router: Router = Router()

// home
router.get('/', (req, res) => {
    res.send('home page')
})

// MEMES
router.get('/api/memes/list', MemesController.list)
router.post('/api/memes/uploadImg', MemesController.uploadImg)
router.post('/api/memes/add', MemesController.add)

router.use('/api')
export default router
