import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Observable<any[]>;
  promo: any;

  constructor(private db: AngularFirestore, private af: AngularFireDatabase) {
    this.products = db.collection('product').valueChanges();
    /* this.promo = af.list('/products');*/
   }

  ngOnInit() {
  }



  sendMsg(name, price, category, rating, message) {
    console.log(name);
    this.db.collection('product').add({
      name: name,
      price: +price,
      category: category,
      ratings: +rating,
      desc: message,
  });
  }

}

