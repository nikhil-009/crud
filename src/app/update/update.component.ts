import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  userdata:any
  user_id:number=0;

  dataForm:FormGroup;

  constructor(private userservice:UserService,private route:ActivatedRoute,private router:Router) { 
    this.route.paramMap.subscribe(pathParam=> {
      this.user_id=parseInt(pathParam.get('users') || "");
    });
    
    this.dataForm=new FormGroup({
    title:new FormControl(this.userdata.title,[
     Validators.required,
     Validators.minLength(4)
   ]),
   
   description:new FormControl('',Validators.required),
   id:new FormControl('',Validators.required),
   
 }); 
 this.userservice.getbyid(this.user_id).subscribe((result:any)=>{
  this.userdata=result.data;
  this.dataForm.setValue(this.userdata);
});
 
 


}

  ngOnInit(): void {
  }
  user:any

  
  editdetails(){
    // alert("Hello")
     this.userservice.editlist(this.dataForm.value).subscribe()
     alert("Updated");
     this.dataForm.reset();
      //this.userService.navstud();
      this.router.navigate(['list']);
   }

}
