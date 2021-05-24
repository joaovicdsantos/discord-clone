import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BoxComponent } from "./box/box.component";
import { SidenavComponent } from "./sidenav.component";

@NgModule({
  declarations: [
    SidenavComponent,
    BoxComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SidenavModule {

}
