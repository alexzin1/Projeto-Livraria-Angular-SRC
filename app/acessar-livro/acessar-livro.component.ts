import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessar-livro',
  templateUrl: './acessar-livro.component.html',
  styleUrls: ['./acessar-livro.component.css']
})
export class AcessarLivroComponent implements OnInit {

  //@Input() listaLivros : any;

  constructor() { }

  ngOnInit(): void {
  }

  listaLivros = JSON.parse(sessionStorage.getItem("listaLivros"));
}
