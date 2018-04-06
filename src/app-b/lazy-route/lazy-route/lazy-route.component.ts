import { Component, OnInit } from '@angular/core';
import {SystemService} from '../../../shared/system/system.service';

@Component({
  selector: 'app-lazy-route',
  templateUrl: './lazy-route.component.html',
  styleUrls: ['./lazy-route.component.css']
})
export class LazyRouteComponent implements OnInit {
  private _service: SystemService;
  private some: string;

  constructor(service: SystemService) {
    this._service = service;
  }

  ngOnInit() {
    this.some = SystemService.getSome();
  }

}
