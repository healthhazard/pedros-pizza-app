import { Component, OnDestroy, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly subs = new Subscription();

  constructor(private readonly appService: AppService) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
