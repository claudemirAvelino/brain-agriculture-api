import { Request, Response } from 'express';
import { IRuralProducerService } from '../../services/IRuralProducerService';
import { CreateProducerRequest } from './CreateProducerRequest';
import { CpfCnpjInvalidoException } from '../../domain/exceptions/CpfCnpjInvalidoException';
import { Prisma } from '@prisma/client';

export class RuralProducerController {

  #servico: IRuralProducerService
  constructor(servico: IRuralProducerService) {
    this.#servico = servico
  }

  async create(request: Request, response: Response) {
    try {
      const createProducerRequest = request.body as CreateProducerRequest;

      const produtorCriado = await this.#servico.create(createProducerRequest);

      return response.status(201).json(produtorCriado)
    } catch (error) {
      console.log('create controller error', error)
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return response.status(400).send({ message: "CPF ou CNPJ já estão cadastrados!", error: true })
        }
      }
      if (error instanceof CpfCnpjInvalidoException) {
        return response.status(400).send({ message: error.message, error: true })
      }
      return response.status(500).send(error)
    }
  }

  async update(request: Request, response: Response) {

  }

  async getByCNPJorCPF(request: Request, response: Response) {

  }

  async deleteById(request: Request, response: Response) {

  }

  async dashboard(request: Request, response: Response) {

  }
}