import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from "ng2-translate";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ],
  exports:      [ CommonModule, FormsModule ]
})
export class SharedModule { 
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TranslatePipe]
    }
  }
}
