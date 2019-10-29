import { HangarFacade } from './../../../../store/facade/hangar.facade';
import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hangar-detail',
  templateUrl: './hangar-detail.component.html',
  styleUrls: ['./hangar-detail.component.css']
})
export class HangarDetailComponent implements OnInit {

  hangar$: Observable<HangarModel> = this.hangarFacade.hangarSelected$;

  constructor(private hangarFacade: HangarFacade) {}

  ngOnInit() { }

  deleteHangar(hangar: HangarModel) {
    this.hangarFacade.deleteHangar(hangar);
  }

}
