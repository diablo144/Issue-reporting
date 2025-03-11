import { update } from "../js/data.js";

console.log("hi");
console.log(io);
export const sent_req=(data)=>{
    fetch('https://mcetreport-production.up.railway.app/:8080',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(respons=>respons.json())
    .then((datas)=>{
        datas.forEach((element) => {
        
        if(element.value=="wfw"){
            console.log("running")
        }
        else {
            let x=update(element.value,element.location);
  
         
        }
    })}
    )
    .catch(error=>console.error('error',error))
}
