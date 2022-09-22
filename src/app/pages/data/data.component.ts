import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  dataform!: FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataform = this.formbuilder.group({
      phonenumber: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
      firstname: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      lastname: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      location: ''

    })
  }
  save(){}
}
