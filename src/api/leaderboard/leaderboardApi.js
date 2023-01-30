import { caBaseUrl } from "../../utils/urls";
import axios from "axios";
 export class leaderboardApi{
    static getLeaders=()=>{
        axios.get(`${caBaseUrl}/ambassadorLeaderboard`).then((response)=>{
            // console.log(response.data)
            return response.data;

        },(error)=>{
            console.log(error)
        })
    }
 }