import {LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement{
    greeting = 'World';
    forAnotherBranch = 'Tokyo';

    changeHandler(event){
        this.greeting = event.target.value;
    }


    anotherBranchHandler(event){
        this.forAnotherBranch = event.target.value;       
    }
}
