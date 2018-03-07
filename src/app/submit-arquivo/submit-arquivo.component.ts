import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-submit-arquivo',
  templateUrl: './submit-arquivo.component.html',
  styleUrls: ['./submit-arquivo.component.css']
})
export class SubmitArquivoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submissaoArquivo(form){
    console.log("fom >>>>", form.form.value.arquivo);
    this.http.post("http://localhost:3000/submission", form.form.value.arquivo)
    .subscribe(response => {
      console.log("reponse ", response);
    })
  }

}
