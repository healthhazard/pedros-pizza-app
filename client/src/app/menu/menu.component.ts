import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IPizza } from '../../../../server/src/services/pizza/pizza.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMenuComponent implements OnInit, OnDestroy {
  public readonly pizzas = new BehaviorSubject<IPizza[]>([]);

  constructor(private readonly appService: AppService) { }

  public ngOnInit(): void { }

  public ngOnDestroy(): void { }
}
