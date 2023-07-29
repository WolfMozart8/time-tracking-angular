import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ContainerComponent } from './components/wrappers/container/container.component';
import { DataService } from './services/data.service';
import { SelectTimeService } from './services/select-time.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ActivityComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, SelectTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
