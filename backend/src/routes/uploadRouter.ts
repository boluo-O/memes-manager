import { __dirname } from '../app'
import { Router } from 'express'

const uploadRouter: Router = Router()
uploadRouter.post('/image', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.')
    }

    const sampleFile = req.files.sampleFile
    const uploadPath = __dirname + '/public/images/' + sampleFile.name
    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err)
        res.send('File uploaded11111111!')
    })
})

export default uploadRouter
