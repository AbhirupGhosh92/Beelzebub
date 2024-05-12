export interface LocalStorageRepo{
    
    setData(key : string,value : string) : void
    getData(key : string,default_value : string) : string
    clear() : void
    removeData(key : string) : void
}

export class LocalStorageRepoImpl implements LocalStorageRepo{
    setData(key: string, value: string): void {
        localStorage.setItem(key,value)
    }
    
    getData(key: string, default_value:string): string {
       return localStorage.getItem(key) ?? default_value
    }

    clear(): void {
        localStorage.clear()
        
    }

    removeData(key : string) : void {
        localStorage.removeItem(key)
    }
    
}