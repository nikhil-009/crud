import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  dataForm: FormGroup;

  constructor(private userservice:UserService) { this.dataForm=new FormGroup({
    title:new FormControl('',[
     Validators.required,
     Validators.minLength(4)
   ]),
   
   description:new FormControl('',Validators.required),
   id:new FormControl('',Validators.required),
   
 }); }

  ngOnInit(): void {
  }
  user:any

  addData(){
    this.user=this.dataForm.value;
    this.userservice.addlist(this.user).subscribe();
    alert("Registered");


  }

}
