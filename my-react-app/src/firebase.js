import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"
import { getDatabase } from 'firebase/database'

const app = initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
})

export const auth = getAuth(app)
export const db = getDatabase(app)
export default app
