
import {firebaseConfig} from "../firebaseConfig.js"

type FirebaseConfig = {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
    measurementId:string
}

export class Utils
{
    static  firebaseConfig : FirebaseConfig = firebaseConfig
}