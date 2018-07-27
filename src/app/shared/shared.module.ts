import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    MatSnackBarModule
} from '@angular/material';

import { AlertComponent } from './alert/alert.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { FormDialogComponent } from './form/dialog/form-dialog.component';

const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
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
    MatSnackBarModule
];

const PIPES = [

];

const COMPONENTS = [
    FormComponent
];

const ENTRY_COMPONENTS = [
    AlertComponent,
    DialogComponent,
    FormDialogComponent
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
