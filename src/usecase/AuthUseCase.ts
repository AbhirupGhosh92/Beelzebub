import { AuthRepository } from "@/repository/AuthRepository";
import { LocalStorageRepo } from "@/repository/LocalStorageRepo";
import { UserCredential } from "firebase/auth";


export class AuthUseCase{
    
    private repository : AuthRepository

    constructor(repository : AuthRepository){
        this.repository = repository
    }

    async login():Promise<UserCredential> {
       return this.repository.loginWithGoogle()
    }

    logout():Promises<void>
    {
        return this.logout()
    }
    
}