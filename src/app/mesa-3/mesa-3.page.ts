import { Component, OnInit } from '@angular/core';
import { Pedido } from '../interfaces/pedido.interface';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { PizzeriaService } from '../services/pizzeria.service';
@Component({
  standalone: false,
  selector: 'app-mesa-3',
  templateUrl: './mesa-3.page.html',
  styleUrls: ['./mesa-3.page.scss'],
})
export class Mesa3Page implements OnInit {
  selectedPizza: string = '';
  selectedMesa: string = 'Mesa 3';
  pedidos: Pedido[] = [];

  constructor(
    private alertController: AlertController,
    private pizzeria: PizzeriaService
  ) {}

  ngOnInit() {
    this.pedidos = this.pizzeria.obtenerPedidos();
  }

  // Método para agregar un pedido
  oredenarPizza() {
    if (!this.selectedPizza) {
      // Manejar el caso en que no se haya seleccionado una pizza
      this.alertController
        .create({
          header: 'Error',
          message: 'Debes seleccionar una pizza',
          buttons: ['OK'],
        })
        .then((alert) => alert.present());
      return;
    }

    const pedido: Pedido = {
      id: this.generateId(),
      pizza: this.selectedPizza,
      mesa: this.selectedMesa,
    };
    this.pizzeria.agregarPedido(pedido);
  }

  // Método para generar un ID único y bonito
  private generateId(): string {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const uniqueCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${year}${month}${day}-${hours}${minutes}${seconds}-${uniqueCode}`;
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
