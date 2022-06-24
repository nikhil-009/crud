import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

export interface user {
  id: string;
  title: string;
  description: string;
 
}
const ELEMENT_DATA: user[] = [];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description'];
  dataSource = ELEMENT_DATA;

  constructor(private userservice:UserService,private router:Router) { 
    this.userdata();
  }

  ngOnInit(): void {
  }
  data:any;
  userdata(){
this.userservice.getlist().subscribe((result:any)=>{
  this.data=result.data;
  this.dataSource=this.data
  
  console.log(result.data);

})

  }
  editData(id:string){
    this.router.navigate(['edit',id]);

  }
  removeData(id:string){
      this.userservice.removelist(id).subscribe((result:any)=>{
        alert("Details Removed");
        this.userdata();
      });

  }
  

}
