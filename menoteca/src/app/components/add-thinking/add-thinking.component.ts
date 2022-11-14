import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }

}
