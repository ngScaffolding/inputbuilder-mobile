import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from '@ngscaffolding/core';
import { TranslateModule } from '@ngx-translate/core';
import { InputBuilderMobileComponent } from './components/inputbuilder-mobile/inputBuilder-mobile.component';

@NgModule({
  declarations: [InputBuilderMobileComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
  ],
  exports: [InputBuilderMobileComponent],
})
export class InputbuilderMobileModule {}
