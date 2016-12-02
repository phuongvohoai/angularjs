import { List } from '../../node_modules/linqts/linq';
import { ICategory } from '../models/category.interface';
import { Category } from '../models/category.model';


export class CategoryProvider {

	public Categories = new List<ICategory>();

	/**
	 * Creates an instance of UserProvider.
	 * 
	 * 
	 * @memberOf UserProvider
	 */
	constructor() {
		this.BuildSampleData();
	}

	public ViewCategory(index: number){
		return this.Categories.ElementAt(index);
		
	}

	private BuildSampleData() {
		let category1 = new Category();
		category1.id = "1";
        category1.name = "IT";
        category1.description = "Công nghệ thông tin";
        category1.isGroup = true;
        category1.groupID = 1;
        let category2 = new Category();
		category2.id = "2";
        category2.name = "Nội trợ";
        category2.description = "Làm việc nhà";
        category2.isGroup = true;
        category2.groupID = 2;
       
		this.Categories.Add(category1);
        this.Categories.Add(category2);
	}

}