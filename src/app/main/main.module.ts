import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/component/core.module";
import { MainComponent } from "./main.component";

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}
