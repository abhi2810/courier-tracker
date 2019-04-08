import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Parcel } from './parcel.model';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  loading = new Subject<boolean>();
  hasError: boolean;
  errorStatus: string;
  parcel: Parcel;

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) { 
    this.hasError = false;
    this.parcel = {
      id : 0,
      name: '',
      createdBy: 0,
      createdOn: '',
      isFrom: 0,
      goingTo: 0,
      dispatched: false,
      delivered: false,
    }
  }

  getCourier(id: number) {
    this.loading.next(true);
    this.http.get('http://localhost:8081/parcel/'+id).subscribe(
    (data:Parcel) => {
      console.log(data);
      this.parcel = data;
      this.loading.next(false);
      this.router.navigate(['/result']);
    },
    (error) => {
      console.log(error.status);
      this.hasError = true;
      this.errorStatus = error.status;
      this.snackBar.open("Courier Id doesn't exist.", "ok", {
        duration: 2000
      });
      this.loading.next(false);
    });
  }

  getParcel() {
    return {...this.parcel};
  }

}
