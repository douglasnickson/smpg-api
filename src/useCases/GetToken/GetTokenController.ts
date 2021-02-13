import { Request, Response } from "express";
import { GetTokenUseCase } from "./GetTokenUseCase";

export class GetTokenController {
  constructor(private getToken: GetTokenUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {clientId, clientSecret, grantType, redirectUri, code} = request.body;

    try {
      await this.getToken.execute({
        clientId,
        clientSecret,
        grantType,
        redirectUri,
        code
      });
      return response.status(200).send();

    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}
