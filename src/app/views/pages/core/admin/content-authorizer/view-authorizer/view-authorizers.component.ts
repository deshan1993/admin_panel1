import { Component } from "@angular/core";
import { OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;
@Component({
    selector: 'view-authorizers',
    templateUrl: 'view-authorizers.component.html',
    styleUrls: ['view-authorizers.component.css']
})

export class ViewAuthorizersComponent implements OnInit {
    ngOnInit(): void {
       this.dataTable();
    }


    dataTable(){
        $('#dataTable').DataTable();
    }

}