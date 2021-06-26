import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){ // canDeactivate()
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let listaUsuarios = JSON.parse(sessionStorage.getItem('listaUsuarios'));
    let retorno;

    console.log(user.acesso);
    if(user.acesso == "1" || user.acesso == "0"){
    console.log("Usuário é cliente, pode alugar livros!");
    console.log(user.acesso);
    retorno = true;

    } else {
    console.log("Usuário não é Cliente, sem acesso!");
    this.router.navigate(["login"]);
    retorno = false;
    }

    return retorno;
  }
}
