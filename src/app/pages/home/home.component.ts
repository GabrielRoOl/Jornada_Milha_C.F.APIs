import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private servicePromocao: PromocaoService) {}
  ngOnInit(): void {
    this.servicePromocao.listar().subscribe((resposta) => {
      console.log(resposta);
    });
  }
}
