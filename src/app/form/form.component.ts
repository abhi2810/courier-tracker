import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackingService } from '../services/tracking.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,OnDestroy {

  isLoading: boolean;
  loading = new Subscription();

  constructor(private trackingService: TrackingService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.loading = this.trackingService.loading.subscribe(data => {
      this.isLoading = data;
    });
  }

  ngOnDestroy() {
    this.loading.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log(form.value.courierId);
    this.trackingService.getCourier(form.value.courierId);
  }

}
