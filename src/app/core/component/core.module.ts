import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidenavModule } from "./sidenav/sidenav.module";

@NgModule({
  imports: [
    CommonModule,
    SidenavModule
  ],
  exports: [
    SidenavModule
  ]
})
export class CoreModule {

}
