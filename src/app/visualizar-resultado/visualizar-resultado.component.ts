import { Component, OnInit , Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-visualizar-resultado',
  templateUrl: './visualizar-resultado.component.html',
  styleUrls: ['./visualizar-resultado.component.css']
})
export class VisualizarResultadoComponent implements OnInit {

  @Output()  result : any = {
    listName : "",
    studentId : "",
    exceptions : "",
    passed : "",
    failed : "",
    total : ""
  };
  constructor( private http: HttpClient) { }

  ngOnInit() {
     
  }

  dadosTarefa: any = {
    studentId: '',
    listNumber: ''
  }


  getResultado(){
    if(this.dadosTarefa.studentId && this.dadosTarefa.listNumber){

      this.http.get('http://localhost:3000/submission?studentId=' 
          + this.dadosTarefa.studentId+ '&listName=' + this.dadosTarefa.listNumber)
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        this.result = dados;
      }, erro => {
        console.log(erro);
      });

    }
  }  

}
