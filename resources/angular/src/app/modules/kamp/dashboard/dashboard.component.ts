import { Component, OnInit } from '@angular/core';
import { Kamp } from '../kamp';
import { KampService } from '../kamp.service';
import { ZahtevDatatableComponent } from 'app/modules/zahtev/zahtev-datatable/zahtev-datatable.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kampovi: Kamp[] = [];
  kamp_id: number;
  smena_id: number;
  stats: any;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'Green'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: 'Yellow'}
  ];

  constructor(private kampService:KampService) { }

  kamp_changed($event){
    this.load_statistika($event.value);
  }

  load_statistika(id:any){
    this.kampService.dashboard_stats(id).subscribe(res => this.stats = res );
  }
  ngOnInit(): void {
    this.kampService.all().subscribe(res => {
      this.kampovi=res
      if(this.kampovi.length>0){
        this.kamp_id = this.kampovi.slice(-1)[0].id
        this.load_statistika(this.kamp_id);
      }
    });
  }

}
