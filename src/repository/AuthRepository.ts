import { Firebase } from "@/di/Firebase";
import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup, signOut } from "firebase/auth";

export interface AuthRepository{
    
    getAuth() : Auth
    
    loginWithGoogle() : Promise<UserCredential>

    logout() : Promise<void>

}

export class AuthRepositoryImpl implements AuthRepository{
    
    private firebase : Firebase  = Firebase.getInstance()
    private provider = new GoogleAuthProvider();
    getAuth(): Auth {
        return this.firebase.getAuth()
    }
    loginWithGoogle(): Promise<UserCredential> {
        return signInWithPopup(this.getAuth(),this.provider)
    }
    logout(): Promise<void> {
        return signOut(this.getAuth())
    }
}