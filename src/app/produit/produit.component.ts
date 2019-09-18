import {Component, OnInit} from '@angular/core';

import {Produit} from '../shared/produit';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from './produit.service';
import {ActivatedRoute} from '@angular/router';
import {DataModel} from '../shared/data.model';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.componenet.css']

})

export class ProduitComponent implements OnInit {

  produitForm : FormGroup;

  produit :Produit = new Produit();

  produits : Produit[];

  produitsModel : DataModel[];

  constructor(private produitService: ProduitService, private fb: FormBuilder , private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.produits= this.route.snapshot.data.produits;
      this.produitForm = this.fb.group({
        refer:['', Validators.required],
        quantite: '',
        prixUnitaire: ''
      });

      this.produitsModel= [
        new DataModel('id','ID','number',true,[]),
        new DataModel('refer','Référence','String',false,[]),
        new DataModel('quantite','Quantité','number',false,[]),
        new DataModel('prixUnitaire','Prix Unitaire','number',false,[]),
      ]


}


}
