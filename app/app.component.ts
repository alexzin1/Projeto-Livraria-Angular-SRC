import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router :  Router){
    let user = {logado: false, inadimplente: true, acesso: ""};
    let listaUsuarios = [
      {nome: "rootMaster", inadimplente: false, login: "root", senha: "123", acesso: "0"}, //0 = master
      {nome: "clientepago",inadimplente: true, telefone: 99999999999, login: "cliente1", senha: "123", acesso: "1"}, // 1 = cliente
      {nome: "clientenaopago", inadimplente: false, telefone: 99999999999, login: "cliente2", senha: "123", acesso: "1"}, // 1 = cliente
      {nome: "funcionario1", inadimplente: false, login: "funcionario", senha: "123", acesso: "2"} // 2 = funcionario
    ];

    let listaLivros = [
      {titulo: "tituloEx1", genero: "terror", autor: "Alex Silva", preco: 9.44}, //livro exemplo 1
      {titulo: "tituloEx2", genero: "comedia", autor: "Silva Alex", preco: 120.44}, //livro exemplo 2
    ];

    sessionStorage.setItem("usuario",JSON.stringify(user));
    sessionStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
    sessionStorage.setItem("listaLivros", JSON.stringify(listaLivros))


    //<input type="text" pattern="^\d+(,\d{1,2})?$" required>


  };

}
