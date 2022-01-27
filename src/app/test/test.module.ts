import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TestComponent } from "./test.component";

@NgModule ( {
  imports: [ CommonModule,FormsModule,IonicModule],
  declarations: [TestComponent],
  exports: [TestComponent]
})

export class TestcomponentModule {}