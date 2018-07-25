import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './core/store';
import { LoadScaffoldAction } from './core/store/scaffold/scaffold.actions';
import { selectScaffoldByName } from './core/store/scaffold';
import { Observable } from 'rxjs';
import { Scaffold } from './core/model/scaffold';

@Component({
    selector: 'facade-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public scaffold: Observable<Scaffold>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.store.dispatch(new LoadScaffoldAction());

        this.scaffold = this.store.select(selectScaffoldByName('LoginRequest'));
    }

}
