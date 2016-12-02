import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoryProvider } from '../../providers/category.provider';
import { Category } from '../../models/category.model';
import { ContractTypeProvider } from '../../providers/contracttype.provider';
import { ContractType } from '../../models/contracttype.model';
import { Unit } from '../../models/unit.enum';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
  providers: [CategoryProvider, ContractTypeProvider]
})
export class PostPage {
  
  categories: Category[];
  contracttypes: ContractType[];
  units: any = [Unit.fixed, Unit.hourly, Unit.monthly, Unit.other];  

  constructor(public navCtrl: NavController, private categoryProvider: CategoryProvider, private contracttyprProvider: ContractTypeProvider) {
    this.categories = [this.categoryProvider.ViewCategory(0), this.categoryProvider.ViewCategory(1)];
    this.contracttypes = [this.contracttyprProvider.ViewContractType(0), this.contracttyprProvider.ViewContractType(1)];
  }

}
