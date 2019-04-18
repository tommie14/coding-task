import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatPaginatorModule],
  exports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatPaginatorModule]
})
export class AppAngularMaterialModule {
}
