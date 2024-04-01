import { AuthRepository } from "@/repository/AuthRepository";
import { promises } from "dns";
import { UserCredential } from "firebase/auth";


export class AuthUseCase{
    
    private repository : AuthRepository

    constructor(repository : AuthRepository){
        this.repository = repository
    }

    login():Promise<UserCredential>{
       return this.repository.loginWithGoogle()
    }

    logout():Promises<void>
    {
        return this.logout()
    }
    
}