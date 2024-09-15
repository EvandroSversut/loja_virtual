import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para styleUrls
})
export class AppComponent {
  tituloLogin = 'Login da Loja';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    // Inicialize o formulário apenas uma vez
    this.loginForm = this.fb.group({
      id: [],
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  // Método para retornar um objeto Usuario
  loginObjeto(): Usuario {
    return {
      login: this.loginForm.get('login')?.value!,
      senha: this.loginForm.get('senha')?.value!
    };
  }

  fazerLogin(){
    const usuario = this.loginObjeto();

    this.loginService.logar(usuario);

    console.info('Dados de Login ->' + usuario.login);
    console.info('Dados de Login ->' + usuario.senha);
  }
}
