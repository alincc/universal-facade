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
    MatProgressBarModule
} from '@angular/material';

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
    MatProgressBarModule
];

const PIPES = [

];

const COMPONENTS = [
    FormComponent
];

const ENTRY_COMPONENTS = [
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
