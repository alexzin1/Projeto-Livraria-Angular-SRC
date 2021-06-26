import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticaGuardService implements CanActivate{

  constructor(private router: Router) { }


  canActivate(){ // canDeactivate()
    let user = JSON.parse(sessionStorage.getItem('usuario'));

    if(!user.logado){
      console.log("usuário não está logado!")
      this.router.navigate(["/login"]);
    } else {
      console.log("Usuário logado!")
    }

    return user.logado;
  }
}
