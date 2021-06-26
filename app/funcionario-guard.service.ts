import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){ // canDeactivate()
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let listaUsuarios = JSON.parse(sessionStorage.getItem('listaUsuarios'));
    let retorno;

    if(user.acesso == "2" || user.acesso == "0"){
      console.log(user.acesso);
      console.log("Usuário é funcionário, pode cadastrar clientes e livros!");
      retorno = true;

    } else {
      console.log("Usuário não é Funcionário sem acesso!");
      this.router.navigate(["/login"]);
      retorno = false;
    }

    return retorno;
  }
}
