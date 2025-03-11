/*
import { update } from "../js/data.js";
 export const fetch_data=()=>{
    fetch('https://mcetreport-production.up.railway.app/:8080/data').then(
        response=>response.json()
    ).then(
        data=>{if(data){
            let x=update(data.value,data.location);
            console.log(x);
            console.log(data.value)
            console.log(data);
        }
        
        else{
            console.log("nothing")
        }}
    ).catch(error=>(console.error('Error fetching data:', error)));
    
 }*/
