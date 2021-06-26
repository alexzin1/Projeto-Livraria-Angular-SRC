import {FormsModule} from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssitirComponent } from './assitir/assitir.component';
import { AulaComponent } from './assitir/aula/aula.component';
import { LoginComponent } from './login/login.component';
import { FaltaPagamentoComponent } from './falta-pagamento/falta-pagamento.component';
import { PagGuardService } from './pag-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AutenticaGuardService } from './autentica-guard.service';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { AlugarLivroComponent } from './alugar-livro/alugar-livro.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { AcessarLivroComponent } from './acessar-livro/acessar-livro.component';

import { AuthGuardService } from './auth-guard.service';
import { RootGuardService } from './root-guard.service';
import { FuncionarioGuardService } from './funcionario-guard.service';
import { ClienteGuardService } from './cliente-guard.service';
import { PhonePipe } from './phone.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssitirComponent,
    AulaComponent,
    LoginComponent,
    FaltaPagamentoComponent,
    NavbarComponent,
    CadastroFuncionarioComponent,
    AlugarLivroComponent,
    CadastroClienteComponent,
    CadastroLivroComponent,
    AcessarLivroComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule
  ],
  providers: [AutenticaGuardService, PagGuardService, AuthGuardService, ClienteGuardService, FuncionarioGuardService , RootGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
