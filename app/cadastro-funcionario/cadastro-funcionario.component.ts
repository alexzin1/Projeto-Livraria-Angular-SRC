import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  @ViewChild("name",{static:true}) name : ElementRef <HTMLInputElement>;
  @ViewChild("user",{static:true}) user : ElementRef <HTMLInputElement>;
  @ViewChild("pass",{static:true}) pass : ElementRef <HTMLInputElement>;
  @ViewChild("cadUser",{static:true}) form : ElementRef <HTMLFormElement>;

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(){
    let user = this.user.nativeElement.value;
    let pass = this.pass.nativeElement.value;
    let name = this.name.nativeElement.value;
    let listaUsuarios = JSON.parse(sessionStorage.getItem("listaUsuarios"));
    let cadastra = true;

    for(let usuario of listaUsuarios){
      if(usuario.nome.toLowerCase() == user.toLowerCase()){
        document.getElementById("alertas").innerHTML="Login já cadastrado."
        document.getElementById("alertas").style.display = "block";
        document.getElementById("alertas").style.backgroundColor = "red";
        cadastra = false;
        console.log("verificando se existe")
        break;
      }
    }

    if(cadastra){
      listaUsuarios.push({nome:name, inadimplente: false, login: user, senha:pass,acesso:"2"});
      document.getElementById("alertas").innerHTML="Usuário cadastrado com sucesso."
      document.getElementById("alertas").style.display = "block";
      document.getElementById("alertas").style.backgroundColor = "darkgreen";
      this.form.nativeElement.reset();
      sessionStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
      console.log(listaUsuarios);
    }

  }
}

