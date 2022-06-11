import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Zahtev } from '../zahtev';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-zahtev-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  zahtev: Zahtev;
  constructor(
    private zahtevService: ZahtevService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.zahtevService.find(this.activatedRoute.snapshot.params?.zahtevId).subscribe(res => {
      // console.log(res);
      this.zahtev = res;
    });
  }

}
