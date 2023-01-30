import axios from "axios";
import { caBaseUrl } from "../../utils/urls";
 export class ambassadorReg{
    static regAmbas=()=>{
        let accessToken=window.localStorage.getItem("accessToken")
        axios.post(`${caBaseUrl}/ambassador`,{
            headers: {
              Authorization: `Bearer ${accessToken}}`,
            },
          }).then((response)=>{
            console.log(response)
          },(error)=>{
            console.log(error)
          })
    }
 }