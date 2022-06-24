import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustominterceptorService implements HttpInterceptor{

  constructor() {

    
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5MWI0YzRjZmI4ZDgwYjk2MTA4NWIxNDUxMzA5MzA2MzI2Nzc0NjBlM2E4ZDUzNjk4ZGY1MzMzMGZmZWI4MTU1ZGNkOTE3OWEyNTFhN2I0In0.eyJhdWQiOiIzIiwianRpIjoiMTkxYjRjNGNmYjhkODBiOTYxMDg1YjE0NTEzMDkzMDYzMjY3NzQ2MGUzYThkNTM2OThkZjUzMzMwZmZlYjgxNTVkY2Q5MTc5YTI1MWE3YjQiLCJpYXQiOjE2NTYwNDYzODQsIm5iZiI6MTY1NjA0NjM4NCwiZXhwIjoxNjg3NTgyMzg0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ADhJzOuEB3mrVstH-IaTPhuLsbpWIaomvsakL_2GJyZrLkXv2i4CHqalgWhke24aWQjWFLfgKbQEA8zRN3oRe3S8IFZ1Ffmme0W-5ZfwPWzigeFTV6CtR0ewTXM3vNifbmhJSmkc6m0i_r-EQUq_XexiicHWO-_k3tmaQFy6msSJ0T6ClpFiVRE-tH_-vTBEFOIIbTp4p45tBaRZDVbtmlYNhx9euM-MTSX5uVhRciGkpc9cfBVSrC3qUOKKTd2Mt4_y42RlMhCkNptlPIuy1OgpzbsN9Y5tYaBvUzYC80STP8LJ9vJKm3DkJhidclRXn5r174HItGgXGaRrYU3oZdU-aeZFVloWu4Sg_fScIxP0nWY2a8KMXpgzQDH-67kMpJdLupJOKadfYRWhYhUZN6GPmRkycXygaoWi-V-kGTMvfvKJh0aTQ6__LLdbBFFboTs9Rg0cuiMm7S6wCwjGkrQpzfkg02TXF1Yv8jN7dcat8mgR2H-k2oh-tjBUKRBuyxsfRCaFPKHGDx6MxAvhIo9z6cIV0tCcigq_lVisDThXg1kHTQM7B23IAcgPdO0J_giEf0C5Fyb9BAjEWxOIeDRkfSzLFVObqCtMEMZ8SCLikWqIiJj-UXsTZmbXSGSWcCuRcpPXAwnd5UomSOoCvgG6sy7taOLKtHZnyx4M24U"
 
    var auth = `Bearer ${authToken}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',auth);
    return next.handle(req.clone({headers}))

    throw new Error('Method not implemented.');
  }
}
