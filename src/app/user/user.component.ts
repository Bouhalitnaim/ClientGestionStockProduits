import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Produit} from '../shared/produit';
import {DataModel} from '../shared/data.model';
import {ProduitService} from '../produit/produit.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users: User[];

  userForm: FormGroup;

  user :User = new User();

  usersModel : DataModel[];

  constructor(private userService: UserService,private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
    this.userForm = this.fb.group({
      username:['', Validators.required]
    });

    this.usersModel= [
      new DataModel('id','ID','number',true,[]),
      new DataModel('username','Nom d\'utilisateur','String',false,[]),
      new DataModel('enable','Actif','number',true,[]),
    ]


  }

}
