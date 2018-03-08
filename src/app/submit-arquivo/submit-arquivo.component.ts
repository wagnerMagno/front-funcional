import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-submit-arquivo',
  templateUrl: './submit-arquivo.component.html',
  styleUrls: ['./submit-arquivo.component.css']
})
export class SubmitArquivoComponent implements OnInit {

  dadosTarefa: any = {
    studentSubmission: '',
    studentId: '',
    listNumber: ''
  }

  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  }

   submitDate = new FormData();

  submissaoArquivo(){
    console.log("fom >>>>", this.dadosTarefa);
    this.submitDate.set("studentSubmission", this.dadosTarefa.studentSubmission);
      this.submitDate.set("studentId", this.dadosTarefa.studentId);
      this.submitDate.set("listNumber", this.dadosTarefa.listNumber);
      
      console.log("studentSubmission >>>>", this.submitDate.get("studentSubmission"));
      console.log("studentId >>>>", this.submitDate.get("studentId"));
      console.log("listNumber >>>>", this.submitDate.get("listNumber"));

    if(this.dadosTarefa.studentId && this.dadosTarefa.studentSubmission && this.dadosTarefa.listNumber){
      
    
      
      this.http.post("http://localhost:3000/submission", this.dadosTarefa)
        .subscribe(response => {
          console.log("reponse ", response);
        }, erro => {
          console.log(erro);
        });
    }
  }

}
