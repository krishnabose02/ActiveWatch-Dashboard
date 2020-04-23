import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { NavController } from '@ionic/angular';
import { Activity } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
results: Activity[];
  constructor(public navCtrl: NavController,
              private data: DataService) {

  }

  ngOnInit() {
    if (!localStorage.getItem('user')) {
      this.navCtrl.navigateRoot('/login');
      return;
    }
    this.fetchData();
  }

  fetchData() {
    try {
      // const res = await this.data.getFiles();
      this.data.getFiles().subscribe(res => {
        const serverdata: any = res;
        this.results = serverdata;
        // console.log(res);
        this.results.forEach(element => {
          const d = new Date(element.startTime);
          element.readableDate = d.toDateString() + ' | ' + d.getHours() + ':' + d.getMinutes();

          const duration = element.endTime - element.startTime;
          element.readableDuration = parseInt((duration/1000) + '', 10) + 's ~ ' + parseInt((duration/60000) + '', 10) + 'm';
        });
      })
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}
