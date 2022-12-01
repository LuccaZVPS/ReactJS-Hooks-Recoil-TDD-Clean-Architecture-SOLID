import { AccountModel } from "../../../domain/models/account-model";
import { Authentication } from "../../../domain/useCases/authentication";
import { HttpPostClient } from "../../protocols/http/http-post-client";
export class RemoteAuthentication implements Authentication {
  constructor(public url: string, private httpClient: HttpPostClient) {}

  async auth(params: {
    email: string;
    password: string;
  }): Promise<AccountModel> {
    await this.httpClient.post(this.url);
    return null as unknown as AccountModel;
  }
}
