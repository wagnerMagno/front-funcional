import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-visualizar-resultado',
    templateUrl: './visualizar-resultado.component.html',
    styleUrls: ['./visualizar-resultado.component.css']
})
export class VisualizarResultadoComponent implements OnInit {

    @Output() result: any = {
        listName: '',
        studentId: '',
        exceptions: '',
        passed: '',
        failed: '',
        total: ''
    };

    dadosTarefa: any = {
        studentId: '',
        listNumber: ''
    };

    temErro: boolean;

    constructor(private http: HttpClient) {
        this.temErro = false
    }

    ngOnInit() {

    }



    getResultado() {
        if (this.dadosTarefa.studentId && this.dadosTarefa.listNumber) {

            this.http.get(
                `http://localhost:3000/submission?studentId=${this.dadosTarefa.studentId}&listName=${this.dadosTarefa.listNumber}`)
                .map(res => res)
                .subscribe((response: any) => {
                    console.log(response);
                    if (response.submission.length > 0) {
                        this.result = response.submission[0];
                        this.temErro = false;
                    } else {
                        this.temErro = true;
                    }

                }, (erro: HttpErrorResponse) => {
                    this.temErro = true;
                });

        }
    }

}
