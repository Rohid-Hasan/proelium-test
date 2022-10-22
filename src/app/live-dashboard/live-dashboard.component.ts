import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-dashboard',
  templateUrl: './live-dashboard.component.html',
  styleUrls: ['./live-dashboard.component.css']
})
export class LiveDashboardComponent implements OnInit {
  meters: number[] = [0, 1, 2, 3, 4];
  selectedMeter: number = 5;
  value: string = '0.00';
  constructor() { }

  ngOnInit(): void {
    this.runMeter();
  }

  runMeter() {
    setTimeout(() => {
      this.value = (Math.random() * 100).toFixed(2);
      this.runMeter();
    }, 2000);
  }

  meterChange() {
    this.meters = [];
    for (let i = 0; i < this.selectedMeter; i++) {
      this.meters.push(i);
    }
  }

}
