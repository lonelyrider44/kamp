import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-basic',
  templateUrl: './details-basic.component.html',
  styleUrls: ['./details-basic.component.scss']
})
export class DetailsBasicComponent implements OnInit {

  public kampId: any = -1;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.kampId = this.activatedRoute.snapshot.parent.params?.kampId
  }

}
