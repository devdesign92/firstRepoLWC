import { LightningElement, wire,track } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class ObjectInfo extends LightningElement {
    isCheck = true;
@wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
myinfo;

MyObject;
ObjectApiNames = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT];
@wire(getObjectInfos,{objectApiNames:'$ObjectApiNames'})
HandleJob ({data})
{
    if(data){
        console.log(data);
        this.MyObject = data;
     
    }
    
}


}
