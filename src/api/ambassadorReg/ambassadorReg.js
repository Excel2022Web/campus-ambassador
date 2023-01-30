import axios from "axios";
import { caBaseUrl } from "../../utils/urls";
 export class ambassadorReg{
    static regAmbas=(token)=>{
        axios.post(`${caBaseUrl}/ambassador`,{
            headers: {
              Authorization: `Bearer ${token}}`,
            },
          }).then((response)=>{
            console.log(response)
          },(error)=>{
            console.log(error)
          })
    }
 }