import { GetToken } from "src/entities/GetToken";
import { ITokenService } from "@services/ITokenService";
import { GetTokenRequestDTO } from "./GetTokenDTO";
import { Params } from "src/entities/Params";

export class GetTokenUseCase {
  private tokenService: ITokenService;

  constructor(tokenService: ITokenService) {
    this.tokenService = tokenService;
  }

  async execute(data: GetTokenRequestDTO) {
    const token = new GetToken(data);
    const params = new Params(token)

    const url: string = process.env.TOKEN_URL!;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return await this.tokenService.getToken(url, params.getParams(), { headers });
  }
}
