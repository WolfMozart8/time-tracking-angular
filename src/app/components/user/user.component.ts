import { Component, OnInit } from '@angular/core';
import { SelectTimeService } from 'src/app/services/select-time.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  selectedTime: string = "";

  constructor(private selectTimeService: SelectTimeService){}

  ngOnInit(): void {
      this.selectedTime = this.selectTimeService.getSelectedTime();
  }

  selectTime(time: string){
    this.selectedTime = this.selectTimeService.selectTime(time);
  }
}
