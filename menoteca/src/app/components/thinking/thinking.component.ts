import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.scss']
})
export class ThinkingComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    this.route.navigate([''])
  }

}
