
import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit{
  data = {
    to:"",
    subject:"",
    message:"",
  }

  flag:boolean=false;


  constructor(private email:EmailService,private snack:MatSnackBar){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  doSubmitForm(){
    console.log("try to submit Form");
    console.log("Data", this.data);

    if(this.data.to==''){
      this.snack.open("Feild cannot be empty");
      return;
    }
    this.flag= true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
      console.log(response);
      this.flag=false;
      this.snack.open("send success","ok")
      },
      error=>{
      console.log(error);
      this.flag=false;
      this.snack.open("send error","not ok")
      }
    )
  }
}
