import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagGuardService implements CanActivateChild{

  constructor(private router: Router) { }


  canActivateChild(){ // canDeactivate()
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let retorno;

    if(user.inadimplente){
      console.log("Usuário inadimplente")
      this.router.navigate(["/cobranca"]);
      retorno = false;

    } else {
      console.log("usuario adimplente");
      retorno = true;
    }

    return retorno;
  }




}
