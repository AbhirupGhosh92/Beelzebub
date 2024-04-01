import { AuthRepository } from "@/repository/AuthRepository";
import { UserCredential } from "firebase/auth";


export class AuthUseCase{
    
    private repository : AuthRepository

    constructor(repository : AuthRepository){
        this.repository = repository
    }

    async login():Promise<UserCredential> {
       return await this.repository.loginWithGoogle()
    }

    logout():Promises<void>
    {
        return this.logout()
    }
    
}