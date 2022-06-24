import { LightningElement,wire,track} from 'lwc';
import getAcc from '@salesforce/apex/accHandler.getAcc';
export default class AccRecord extends LightningElement {
 KeyVal = '';
 GetInfo;

 KeySearch(event){
  this.KeyVal = event.target.value;
  console.log(this.KeyVal);
  getAcc({KeySearch:this.KeyVal})
.then(result=>{
 this.GetInfo = result;
  console.log(this.GetInfo);
}).catch(error=>{
    console.error(error);

}) 
}





   // GetInfo;
// @wire(getAcc,{KeySearch:'$KeyVal'} )
// GetInfo;
// Acchandle({data}){
// if (data){
//     console.log(data);
//     this.GetInfo = data;
    
// }
// }



}