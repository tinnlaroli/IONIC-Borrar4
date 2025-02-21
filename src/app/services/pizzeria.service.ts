import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

  pedidos: Pedido[] = [];

  constructor() {}

  agregarPedido(pedido: Pedido) {
    this.pedidos.push(pedido);
  }

  obtenerPedidos() {
    return this.pedidos;
  }

  eliminarPedido(pedido: Pedido) {
    this.pedidos = this.pedidos.filter(p => p.id !== pedido.id);
  }

  obtenerTotalPedidos() {
    return this.pedidos.length;
  }
}

