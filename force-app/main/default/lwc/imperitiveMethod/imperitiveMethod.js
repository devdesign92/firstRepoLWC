import { LightningElement } from 'lwc';
import GetRecords from '@salesforce/apex/contactRec.GetRecords';
export default class ImperitiveMethod extends LightningElement {
  GetCon;
    data = [];
   
    handleClick(){
        
        GetRecords()
        .then(result=>{
           console.log("...data");
           console.log(result);
           this.GetCon = result;
            console.log(this.GetCon);
        })
    }

}