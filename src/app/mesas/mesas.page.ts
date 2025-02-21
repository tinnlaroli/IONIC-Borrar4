import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { PizzeriaService } from '../services/pizzeria.service';
import { Pedido } from '../interfaces/pedido.interface';

@Component({
  standalone: false,
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {
  selectedPizza: string = '';
  selectedMesa: string = 'Mesas';
  pedidos: Pedido[] = [];

  constructor(
    private alertController: AlertController,
    private pizzeria: PizzeriaService
  ) {}

  ngOnInit() {
    this.pedidos = this.pizzeria.obtenerPedidos();
  }

  // Método para confirmar la eliminación de un pedido
  async confirmarEliminacion(slidingItem: IonItemSliding, pedido: Pedido) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este pedido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            slidingItem.close(); // Cierra sin eliminar
          },
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.eliminarPedido(slidingItem, pedido);
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para eliminar un pedido
  eliminarPedido(slidingItem: IonItemSliding, pedido: Pedido) {
    slidingItem.close();
    this.pizzeria.eliminarPedido(pedido);
    this.pedidos = this.pizzeria.obtenerPedidos();
  }
}

