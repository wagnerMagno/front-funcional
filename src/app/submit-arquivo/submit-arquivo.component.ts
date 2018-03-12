import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';

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
    };
    data: FormData;


    constructor(private http: HttpClient) {
        this.data = new FormData();

    }

    ngOnInit() {
    }

    getFile(event) {
        this.dadosTarefa.studentSubmission = event.target.files[0];
    }


    submissaoArquivo() {
        this.data.set('studentSubmission', this.dadosTarefa.studentSubmission);
        this.data.set('studentId', this.dadosTarefa.studentId);
        this.data.set('listNumber', this.dadosTarefa.listNumber);

        const headers = new HttpHeaders();

        headers.set('Accept', 'application/json');
        headers.delete('Content-Type');
        // headers.set('Content-Type', 'multipart/form-data');

        if (this.dadosTarefa.studentId && this.dadosTarefa.studentSubmission && this.dadosTarefa.listNumber) {

            console.log('adfasd', this.dadosTarefa);
            this.http.post('http://localhost:3000/submission', this.data, { headers })
                .subscribe(response => {
                    console.log('reponse ', response);
                }, erro => {
                    console.log(erro);
                });
        }
    }

}
