import { List } from '../../node_modules/linqts/linq';
import { IContractType } from '../models/contracttype.interface';
import { ContractType } from '../models/contracttype.model';


export class ContractTypeProvider {

	public ContractTypes = new List<IContractType>();

	/**
	 * Creates an instance of UserProvider.
	 * 
	 * 
	 * @memberOf UserProvider
	 */
	constructor() {
		this.BuildSampleData();
	}

	public ViewContractType(index: number){
		return this.ContractTypes.ElementAt(index);
		
	}

	private BuildSampleData() {
		let contracttype1 = new ContractType();
		contracttype1.id = "CT1";
        contracttype1.name = "Full-Time";
        let contracttype2 = new ContractType();
		contracttype2.id = "CT2";
        contracttype2.name = "Part-Time";
       
		this.ContractTypes.Add(contracttype1);
        this.ContractTypes.Add(contracttype2);
	}

}