import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@it-geo-store/index';
import { Go } from '@it-geo-store/actions';

@Component({
  selector: 'it-geo-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  public goToInteraction(): void {
		this.store.dispatch(new Go({
			path: ['it-geo']
		}));
	}

}
