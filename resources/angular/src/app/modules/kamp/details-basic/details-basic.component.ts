import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kamp } from '../kamp';
import { KampService } from '../kamp.service';

@Component({
  selector: 'app-details-basic',
  templateUrl: './details-basic.component.html',
  styleUrls: ['./details-basic.component.scss']
})
export class DetailsBasicComponent implements OnInit {

  public kampId: any = -1;
  kamp: Kamp = null;
  constructor(private activatedRoute: ActivatedRoute, private kampService: KampService) { }

  ngOnInit(): void {

    this.kampId = this.activatedRoute.snapshot.parent.params?.kampId
    if( this.kampId ){
      this.kampService.find(this.kampId).subscribe(kamp => {
        // console.log(kamp);
        this.kamp = kamp;
      })
    }
  }

}
