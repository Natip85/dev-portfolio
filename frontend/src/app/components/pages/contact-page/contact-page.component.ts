import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  // @ViewChild('nameFieldRef') nameField!: ElementRef;

contactForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        subject: new FormControl('',),
        message: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(300)]
        })
    });

    //    ngAfterViewInit(): void {
    //     console.log('ngAfterViewInit');
    //     this.nameField.nativeElement.focus();
    // }
    getFieldControl(field: string): FormControl {
        return this.contactForm.get(field) as FormControl;
    }

    onSubmit() {
        if (this.contactForm.invalid) {
            return;
        }
        this.contactForm.reset();
        console.log(this.contactForm.value);
    }
}
