import { Component,OnInit } from '@angular/core';
import { TimeData } from 'src/app/models/time-data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  data: TimeData[] = [];

  readonly bgStyles: string[] = ["bg-work", "bg-play", "bg-study", "bg-exercise", "bg-social", "bg-self-care"]

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
      }
    )
  }
}
