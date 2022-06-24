import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { user } from '../list/list.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  


  getlist():any{
    return this.httpClient.get(environment.dataapi)

  }
  getbyid(id:number){

    return this.httpClient.get(environment.dataapi+id)
  

  }

  editlist(data:any):any{
    return this.httpClient.put(environment.dataapi+data.id,data)
  
  }
  addlist(data:any):any{
    return this.httpClient.get(environment.dataapi,data)

  }
  removelist(id:string):any{
    return this.httpClient.delete(environment.dataapi+id)

  }
}
