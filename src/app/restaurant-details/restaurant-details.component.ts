import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantId!: number;
  restaurant: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.restaurantId = this.route.snapshot.paramMap.get('id');
    // Fetch restaurant details using this.restaurantId
  }
}