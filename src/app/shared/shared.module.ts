import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// TODO: move material module import closest to use

import {
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule
} from '@angular/material';

import { AlertComponent } from './alert/alert.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login.component';

const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSnackBarModule
];

const PIPES = [

];

const COMPONENTS = [

];

const ENTRY_COMPONENTS = [
    AlertComponent,
    DialogComponent,
    LoginComponent
];

@NgModule({
    declarations: [
        ...PIPES,
        ...COMPONENTS,
        ...ENTRY_COMPONENTS
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS
    ],
    imports: [
        ...MODULES
    ]
})
export class SharedModule {

}
