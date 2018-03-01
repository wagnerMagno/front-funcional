import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubmitArquivoComponent } from './submit-arquivo/submit-arquivo.component';


@NgModule({
  declarations: [
    AppComponent,
    SubmitArquivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
