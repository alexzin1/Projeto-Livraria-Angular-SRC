import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-alugar-livro',
  templateUrl: './alugar-livro.component.html',
  styleUrls: ['./alugar-livro.component.css']
})
export class AlugarLivroComponent implements OnInit {

  //@Input() listaLivros : any;

  constructor() { }

  ngOnInit(): void {
  }

  listaLivros = JSON.parse(sessionStorage.getItem("listaLivros"));
}
