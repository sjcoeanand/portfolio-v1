import { ActivatedRouteSnapshot,  ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable, inject } from '@angular/core';
import SampleService, { PhotoModel } from './sample.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  sampleServInst : SampleService = Inject(SampleService)

  
 

}


export const addEditClietResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
  return inject(SampleService).fetchPhotosfromJsonPlaceholder1();
}