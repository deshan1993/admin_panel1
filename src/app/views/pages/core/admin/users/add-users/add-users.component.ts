import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'add-users',
    templateUrl: 'add-users.component.html',
    styleUrls: ['add-users.component.css']
})

export class AddUsersComponent implements OnInit {
    public positionTest: string;
    public admin:string = 'admin';

    public userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.initializeContentProviderForm();
    }

    show() {
        console.log(this.userForm.get("position").value());
    }


    private initializeContentProviderForm(): void {
        this.userForm = this.formBuilder.group({
            'position': [null, [Validators.required]],
            "adminFormCntrl": [null, [Validators.required]]

        });
    }



    // public loadChildPage() {
    //     console.log("admin" + this.admin);
    //     let url:string="";
    //     if(this.admin=='admin1'){
    //         url="user/admin";
    //     }
    //     this.router.navigate([url]);
    // }
}