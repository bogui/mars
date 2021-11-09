import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';
import { NavigationService } from 'src/app/navigation/navigation.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  private category: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly category$ = this.category.asObservable();

  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((params) => params.get('slug')))
      .subscribe((cat) => this.category.next(cat ?? 'nqma kat'));
  }
}
