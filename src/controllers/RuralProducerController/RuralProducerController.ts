import { Request, Response } from 'express';
import { IRuralProducerService } from '../../services/IRuralProducerService';


export class RuralProducerController {

  #servico: IRuralProducerService
  constructor(servico: IRuralProducerService) {
    this.#servico = servico
  }

  async create(request: Request, response: Response) {

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