import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUrl } from './core/@ngrx/router/router-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notes';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectUrl).subscribe((val) => {
      console.log(val)
    })
  }
}
