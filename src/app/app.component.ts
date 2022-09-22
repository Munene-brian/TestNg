import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoComponent } from './dialog/info/info.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myhoney';

  quantity = 1;
  max = 10;
  min = 1;
  price = 600;
  total = 600;
constructor(private router:Router, private dialog:MatDialog){}
  ngOnInit(): void {
    
  }
  addmorekilo(){
    if(this.quantity != 10)
    {
      //this.min++;
      //this.quantity = this.min;
      //this.total++; 
      this.quantity++;
      this.total = this.quantity * this.price;
    }
  }

  minuskilo(){
    if(this.quantity != 1){
      //this.min--;
      //this.quantity = this.min;
      //this.total--;
      this.quantity--;
      this.total = this.quantity * this.price;
    }
  }
  enterdata(){
    this.dialog.open(InfoComponent,{disableClose:false,width:'400px'})
  }
}
