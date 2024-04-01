
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Database,getDatabase } from "firebase/database";
import {Utils} from "../utils"
import { FieldPath } from "firebase/firestore";


export class Firebase{
    
    private static firebase : Firebase
    private app : FirebaseApp 
    private auth : Auth
    private db : Database

    private constructor(){
        this.app = initializeApp(Utils.firebaseConfig)
        this.auth = getAuth(this.app)
        this.db = getDatabase(this.app)

    }

    static getInstance() : Firebase 
    {
        if(this.firebase === undefined || this.firebase === null){
            this.firebase = new Firebase();
        }
        return this.firebase
    }

    getAuth()
    {
        return this.auth
    }

    getDatabse()
    {
        return this.db
    }


}
