import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../core/store';

import { MenuItem } from '../core/model/menu';

import { selectAllMenuItems } from '../core/store/menu';

@Component({
    selector: 'facade-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

    public menu: Observable<MenuItem[]>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.menu = this.store.select(selectAllMenuItems);
    }

}
