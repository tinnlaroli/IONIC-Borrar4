import { Component } from '@angular/core';
import { PizzeriaService } from '../services/pizzeria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  totalPedidos: number = 0;

  constructor( 
  private pizzeriaService: PizzeriaService
  ) {}

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('homepage ngOnInit');
    this.totalPedidos = this.pizzeriaService.obtenerTotalPedidos();
  }
}
