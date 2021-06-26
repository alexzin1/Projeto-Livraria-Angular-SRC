import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }


  canActivate(){ // canDeactivate()
    let user = JSON.parse(sessionStorage.getItem('usuario'));

    if(!user.logado){
      console.log("Acesso Restrito à usuários logados.")
      this.router.navigate(["/login"]);
    } else{
      console.log("Acesso permitido, usuário logado.")

    }

    return user.estado;
  }
}
