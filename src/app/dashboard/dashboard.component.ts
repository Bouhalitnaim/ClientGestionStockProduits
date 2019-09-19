import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../produit/produit.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  private produitsData = {
    labels: [],
    datasets: []
  };

  private usersData = {
    labels: [],
    datasets: []
  };


  constructor(private prduitService: ProduitService, private userServics: UserService) {
  }

  ngOnInit() {

    const datasetsQuantite = {
      label: 'Quantité',
      data: [],
      backgroundColor: 'rgb(128, 217, 38)',
      borderColor: 'rgb(217, 172, 38)'
    };

    const datasetsPrixUnitaire = {
      label: 'Prix Unitaire',
      data: [],
      backgroundColor: 'rgb(0, 191, 255)',
      borderColor: 'rgb(217, 172, 38)'
    };

    this.prduitService.getAll().subscribe(list => list.forEach(produit => {
      this.produitsData.labels.push(produit.refer);
      datasetsQuantite.data.push(produit.quantite);
      datasetsPrixUnitaire.data.push(produit.prixUnitaire);

    }));

    this.produitsData.datasets.push(datasetsQuantite);
    this.produitsData.datasets.push(datasetsPrixUnitaire);


    const datasetsUser = {
      label: 'Roles',
      data: [],
      backgroundColor: 'rgb(128, 217, 38)',
      borderColor: 'rgb(217, 172, 38)'
    };

    this.usersData.datasets.push(datasetsUser);

    this.usersData.labels.push('ROLE_ADMIN');
    this.usersData.labels.push('ROLE_USER');


    this.userServics.getAll().subscribe(list => {
      let adminLenght = 0;

      list.forEach(user => user.roles.forEach(role => {
        if (role.name == 'ROLE_ADMIN') {
          adminLenght++;
        }
      }));
      datasetsUser.data.push(adminLenght);

      let userLength = 0;
      list.forEach(user => user.roles.forEach(role => {
        if (role.name == 'ROLE_USER') {
          userLength++;
        }
      }));
      datasetsUser.data.push(userLength);

    })
  }
}
