import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationService } from './navigation.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          position: 'relative',
          left: '200px',
        })
      ),
      state(
        'closed',
        style({
          position: 'relative',
          left: 0,
        })
      ),
      transition('open <=> closed', [animate('150ms ease-out')]),
      // transition('closed => open', [animate('100 50ms ease-out')]),
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  private showSideNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public readonly showSideNav$ = this.showSideNav.asObservable();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService
      .getRouter()
      .subscribe((event) =>
        this.showSideNav.next(event.url.indexOf('/shop') > -1)
      );
  }
}
