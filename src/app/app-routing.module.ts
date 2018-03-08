
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitArquivoComponent } from './submit-arquivo/submit-arquivo.component';
import { VisualizarResultadoComponent } from './visualizar-resultado/visualizar-resultado.component';

const routes: Routes = [
  { path: 'enviarArquivo', component: SubmitArquivoComponent },
  { path: 'visualizarResultado', component: VisualizarResultadoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'enviarArquivo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
