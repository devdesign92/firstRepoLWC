public with sharing class accHandler {
    @AuraEnabled (cacheable=true)
    public static List<Account>  getAcc(String KeySearch){
       return [SELECT Id,Name from Account where Name =: KeySearch];
    }
}
