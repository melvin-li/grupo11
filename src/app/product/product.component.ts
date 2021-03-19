import { Component, OnInit } from '@angular/core';
import { IItem } from '../interfaces/item.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public listProducts:Array<IItem> = [{
    id: 0,
    img: "https://media.timeout.com/images/100893385/image.jpg",
    name: "Capuchino",
    price: 30,
    description: "un Capuchino cae bien en todo momento. ",
    quantity : 1
  },

  
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
    name: "Caffe con Arona",
    price: 18,
    description: "Cafe dulce o amargo como lo deces es a tu gusto",
    quantity : 1
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coffee_break_%283457656569%29.jpg/1280px-Coffee_break_%283457656569%29.jpg",
    name: "Caffe natual",
    price: 15,
    description: "Hecho como en casa!!!",
    quantity : 1
  }
]

  constructor(private _cartService:CartService) { }

  ngOnInit() {
  }

  public addCart(product:IItem)
  {
    this._cartService.changeCart(product);
  }

}
