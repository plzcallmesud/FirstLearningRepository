import { LightningElement, api, track, wire } from 'lwc';

export default class HelloSalesforce extends LightningElement {
    @api prop1 = 'Salesforce Techno Warrior'; // Defining default value for configurable property 
   @api prop2 = false;
   //To expose a public property, decorate it with @api. 
}