import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SubmitArquivoComponent } from './submit-arquivo/submit-arquivo.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizarResultadoComponent } from './visualizar-resultado/visualizar-resultado.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SubmitArquivoComponent,
    VisualizarResultadoComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
