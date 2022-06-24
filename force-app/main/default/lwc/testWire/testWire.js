import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import id from '@salesforce/user/Id';
import Name_Field from '@salesforce/schema/User.Name';
import Email_Field from '@salesforce/schema/User.Email';
const fields = [Name_Field,Email_Field];

export default class TestWire extends LightningElement {
UserDetails;
userID = id;
@wire(getRecord,{recordId:'$userID', fields})

userDetailsHandler (response){
 let data = response.data;
 let error = response.error;
if(data){
    this.UserDetails = data.fields;
}
if(error){
    console.error(error);
}

}

@wire(getRecord,{recordId:'$userID', fields})
UserDetailsProperty;


}