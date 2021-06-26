import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {
  @ViewChild("titulo",{static:true}) titulo : ElementRef <HTMLInputElement>;
  @ViewChild("genero",{static:true}) genero : ElementRef <HTMLSelectElement>;
  @ViewChild("autor",{static:true}) autor : ElementRef <HTMLInputElement>;
  @ViewChild("preco",{static:true}) preco : ElementRef <HTMLInputElement>;
  @ViewChild("cadUser",{static:true}) form : ElementRef <HTMLFormElement>;

  constructor() { }

  ngOnInit(): void {
  }

  cadastrarL(){
    let titulo = this.titulo.nativeElement.value;
    let genero = this.genero.nativeElement.value;
    let autor = this.autor.nativeElement.value;
    let preco1 = this.preco.nativeElement.value;
    let preco = parseFloat(preco1).toFixed(2);
    let listaLivros = JSON.parse(sessionStorage.getItem("listaLivros"));
    let cadastra = true;


    for(let livros of listaLivros){
      if(livros.titulo.toLowerCase() == titulo.toLowerCase()){//se o titulo da listLivros for igual o titulo do input html
        document.getElementById("alertas").innerHTML="Livro já cadastrado."
        document.getElementById("alertas").style.display = "block";
        document.getElementById("alertas").style.backgroundColor = "red";
        cadastra = false;
        console.log("verificando se existe")
        break;
      }
    }

    if(cadastra){
      listaLivros.push({titulo: titulo, genero: genero, autor: autor, preco: preco});
      document.getElementById("alertas").innerHTML="Livro cadastrado com sucesso."
      document.getElementById("alertas").style.display = "block";
      document.getElementById("alertas").style.backgroundColor = "darkgreen";
      this.form.nativeElement.reset();
      sessionStorage.setItem("listaLivros", JSON.stringify(listaLivros))
      console.log(listaLivros);
    }

  }
}
