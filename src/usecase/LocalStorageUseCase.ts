import { LocalStorageRepo } from "@/repository/LocalStorageRepo";

export class LocalStorageUseCase {
    private localRepo : LocalStorageRepo
    constructor(localRepo : LocalStorageRepo){
        this.localRepo = localRepo
    }

    async setData(key: string, value: string): Promise<void> {
        this.localRepo.setData(key,value)
    }
    async getData(key: string, default_value:string): Promise<string> {
       return this.localRepo.getData(key,default_value)
    }

    async clear(): Promise<void> {
        localStorage.clear()
        
    }

    async removeData(key : string) : Promise<void> {
        localStorage.removeItem(key)
    }
}