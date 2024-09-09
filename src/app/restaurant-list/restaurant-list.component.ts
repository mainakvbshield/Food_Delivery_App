import { Component,OnInit } from '@angular/core';

interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  restaurants: Restaurant[] = [
    { id: 1, name: 'Pizza Palace', image: 'pizza.jpg', rating: 4.5, deliveryTime: '30-40 mins' },
    { id: 2, name: 'Burger Haven', image: 'burger.jpg', rating: 4.2, deliveryTime: '20-30 mins' }
  ];
  
  constructor() { }

  ngOnInit(): void { }

}
