import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RootGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){ // canDeactivate()
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let listaUsuarios = JSON.parse(sessionStorage.getItem('listaUsuarios'));
    let usuario = JSON.parse(sessionStorage.getItem('usuario'));
    let retorno;

    if(user.acesso == "0"){
      console.log(user.acesso);
      console.log("Usuário é o ROOT, pode cadastrar funcionários!");
      retorno = true;

    } else {
      console.log("Usuário não é o ROOT sem acesso!");
      console.log(sessionStorage.getItem("usuario"));
      console.log(usuario.acesso)
      console.log(user)
      console.log(user.acesso)
      this.router.navigate(["/login"]);
      retorno = false;
    }

    return retorno;
  }

}
