import {Produit} from '../shared/produit';
import {Injectable} from '@angular/core';


@Injectable()
export class ProduitMockService {

  private _PRODUITS: Produit[] = [];

  constructor(){
    let p1:Produit=new Produit(1,'Livre',50,20);
    let p2:Produit=new Produit(2,'Cahier',200,5.25);
    let p3:Produit=new Produit(3,'Stylo',500,10);
    this._PRODUITS.push(p1);
    this._PRODUITS.push(p2);
    this._PRODUITS.push(p3);
  }

  public getProduits(): Produit[] {
    return this._PRODUITS;
  }
}
