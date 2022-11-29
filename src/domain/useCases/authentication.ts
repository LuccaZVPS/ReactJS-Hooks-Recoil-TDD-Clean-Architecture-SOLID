import { AccountModel } from "../models/account-model"

type authParams = {
    email:string,
    password:string
}
export interface Authentication {
    auth(params:authParams): Promise<AccountModel>
}