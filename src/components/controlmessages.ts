import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../services/validationservice';

@Component({
  selector: 'control-messages',
  template: `<div class="msgError" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessages {

    @Input() control: FormControl;
    get errorMessage() {
        for (let propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
            return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
        }    
        return null;
    }
    constructor() {
    }    
}

