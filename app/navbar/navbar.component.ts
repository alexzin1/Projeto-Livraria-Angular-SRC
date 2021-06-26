import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("logout");
    let usuario= {logado:false};
    sessionStorage.setItem("usuario",JSON.stringify(usuario));
    this.router.navigate(["/login"]);
    console.log(sessionStorage.getItem("usuario"))
    console.log("fim Logout");
    window.document.getElementById("lblUser").innerHTML= "";
    window.document.getElementById("logoutesconde").style.display = "none";
    window.document.getElementById("loginEsconde").style.display = "block";
  }



}
