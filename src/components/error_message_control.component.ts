import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from "ng2-translate";

@Component({
    selector: 'control-messages',
    template: `<div class="msgError" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
})
export class ErrorMessagesControl {
    translate: TranslateService;

    constructor(translate: TranslateService) {
        this.translate = translate;
    }

    @Input() control: FormControl;
    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                //return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                let message: string;
                this.translate.get('ErrorCodes.' + propertyName).subscribe((res: string) => {
                   message = res;
                });                   
                return message;
            }
        }
        return null;
    }


}

