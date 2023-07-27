import { Component, Input } from '@angular/core';
import { TimeData } from 'src/app/models/time-data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent{

  @Input() activity?: TimeData;
  @Input() bgStyle: string = "";

}
