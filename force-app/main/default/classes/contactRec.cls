public with sharing class contactRec {
 
    @AuraEnabled (cacheable=true)
        public static List<Contact> GetRecords() {
        return [SELECT ID, Name from Contact LIMIT 5];
    }
}
