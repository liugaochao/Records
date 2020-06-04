import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { RecordService } from './service/record.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private recordService: RecordService) {}
  
  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true, // initial value
    locale: 'zh-en'
  };

}