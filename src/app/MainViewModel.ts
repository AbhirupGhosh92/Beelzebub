import { USER_CREDS } from "@/Constants";
import { AuthRepositoryImpl } from "@/repository/AuthRepository";
import { LocalStorageRepoImpl } from "@/repository/LocalStorageRepo";
import { AuthUseCase } from "@/usecase/AuthUseCase";
import { LocalStorageUseCase } from "@/usecase/LocalStorageUseCase";
import { useRef } from "react";
import { setUser } from "@/redux/home/homeSlice";
import { useAppDispatch } from "@/redux/store";

export class MainViewModel{
    private useCase : AuthUseCase
    private localUseCase : LocalStorageUseCase
    constructor(){
        this.useCase = new AuthUseCase(new AuthRepositoryImpl())
        this.localUseCase = new LocalStorageUseCase(new LocalStorageRepoImpl())
    }


    

    private showPopup = useRef(false)
    private isLoggedInRef = useRef(false)
    private dispatch = useAppDispatch();
    
    private async checkLoggedIn()
    {
       let status = await this.localUseCase.getData(USER_CREDS,"")
       if(status.length === 0){
        this.isLoggedInRef.current = false
       }
       else{
        this.isLoggedInRef.current = true
        this.dispatch(setUser(JSON.parse(status)))
       }
    }
    
    login()
    {
        this.showPopup.current = true
        this.useCase.login().then((creds) => {
            this.showPopup.current = false
            this.localUseCase.setData(USER_CREDS,JSON.stringify(creds))
            this.dispatch(setUser(creds))
        })
        .catch((e) => {
            console.error(e)
            this.showPopup.current = false
        })
    }

    async startup() {
        await this.checkLoggedIn()
        if(!this.showPopup.current && !this.isLoggedInRef.current)
        {
            this.login()
        }

    }
}