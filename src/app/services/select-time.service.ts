import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectTimeService {

  private selectedTime: string = "daily";

  selectTime(time: string): string {
    return this.selectedTime = time;
  }
  getSelectedTime(): string {
    return this.selectedTime;
  }
}
