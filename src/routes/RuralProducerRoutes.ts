import express from 'express'
import { ruralProducerController } from '../controllers';

const ruralProducerRouter = express.Router()
ruralProducerRouter.use('/api', ruralProducerRouter)

ruralProducerRouter.post(`/rural-producers`, (request, response) => {

})

ruralProducerRouter.put(`/rural-producers/:id`, (request, response) => {

})

ruralProducerRouter.get(`/rural-producers/cpf-cnpj/:cnpj_cpf`, (request, response) => {

})

ruralProducerRouter.delete(`/rural-producers/:id`, (request, response) => {

})

ruralProducerRouter.get(`/rural-producers/dashboard`, (request, response) => {

})

export default ruralProducerRouter