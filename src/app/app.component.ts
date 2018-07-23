import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './shared/store';
import { LoadScaffoldAction } from './shared/store/scaffold/scaffold.actions';

@Component({
    selector: 'facade-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.store.dispatch(new LoadScaffoldAction());
    }

}
