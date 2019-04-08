import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../services/tracking.service';
import { Parcel } from '../services/parcel.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  parcel: Parcel;
  status: string;
  statusColor: string;

  constructor(private trackingService: TrackingService) { 
    this.parcel = this.trackingService.getParcel();
    this.status = 'Not Dispatched';
    this.statusColor = 'red';
  }

  ngOnInit() {

    if(this.parcel.dispatched) {
      if(this.parcel.delivered) {
        this.status = 'Delivered';
        this.statusColor = 'green';
      }
      else {
        this.status = 'Dispatched';
        this.statusColor = 'yellow';
      }
    }

  }

}
