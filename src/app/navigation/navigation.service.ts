import { Injectable } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  getRouter(): Observable<any> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
  }

  getCategorySlug(): Observable<string | null> {
    return this.route.paramMap.pipe(
      map((params) => {
        console.log(params);
        return params.get('slug');
      })
    );
  }
}
