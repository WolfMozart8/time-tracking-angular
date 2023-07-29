import { Component, Input, OnInit } from '@angular/core';
import { TimeData } from 'src/app/models/time-data';
import { SelectTimeService } from 'src/app/services/select-time.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{

  selectedTime: string = "";

  constructor(private selectTimeService: SelectTimeService){}
  ngOnInit(): void {
      this.selectedTime = this.selectTimeService.getSelectedTime();
      console.log(this.selectedTime)
  }
  getSelectedTime(): string {
    return this.selectTimeService.getSelectedTime();
  }
  @Input() activity?: TimeData;
  @Input() bgStyle: string = "";

}
