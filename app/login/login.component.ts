import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("user", { static: true }) user: ElementRef<HTMLInputElement>;
  @ViewChild("pass", { static: true }) pass: ElementRef<HTMLInputElement>;
  @ViewChild("loginreset",{static:true}) form : ElementRef <HTMLFormElement>;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //@Input () window.document.getElementById("lblUser").innerHTML= "";

  login() {


    let usuario = {
      nome: this.user.nativeElement.value,
      senha: this.pass.nativeElement.value
    };

    let listaUsuarios = JSON.parse(sessionStorage.getItem("listaUsuarios"));
    for (let user of listaUsuarios) {
      if (usuario.nome.toLowerCase() == user.login.toLowerCase() && usuario.senha == user.senha) {
        sessionStorage.setItem("usuario", JSON.stringify({
                                                          nome: user.nome, //verificar se o user.nome vai estar certo
                                                          logado: true,
                                                          inadimplente: user.inadimplente,
                                                          acesso: user.acesso
                                                          }));

        console.log(sessionStorage.getItem("usuario"));

        if (user.acesso == 0) {
          window.document.getElementById("lblUser").innerHTML= " | Admin" +": "+ user.nome;
        } else if (user.acesso == 2) {
          window.document.getElementById("lblUser").innerHTML= " | Funcionário" +": "+ user.nome;
        } else {
          window.document.getElementById("lblUser").innerHTML= " | Cliente" +": "+ user.nome;
        }
        window.document.getElementById("logoutEsconde").style.display = "block";
        window.document.getElementById("loginEsconde").style.display = "none";
        this.router.navigate(["/home"]);
      }else{
        document.getElementById("alerta").innerHTML="Usuário ou senha inválidos.";
        document.getElementById("alerta").style.display = "block";
        //this.form.nativeElement.reset();
      }

    }


  }
}
