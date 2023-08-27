import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { FormsModule } from '@angular/forms';
import { PetService } from './pet.service';
import { AddPetComponent } from './add-pet/add-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MyPetsComponent,
    AddPetComponent,
  ],
  providers: [PetService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
})
export class AppModule {}
