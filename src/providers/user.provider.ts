import { List } from '../../node_modules/linqts/linq';
import { IUser } from '../models/user.interface';
import { User } from '../models/user.model';


export class UserProvider {

	public Users = new List<IUser>();


	/**
	 * Creates an instance of UserProvider.
	 * 
	 * 
	 * @memberOf UserProvider
	 */
	constructor() {
		this.BuildSampleData();
	}

	/**
	 *  Login to system
	 * 
	 * @param {string} userName The user name 
	 * @param {string} password The password
	 * @returns True if login successfully, else false
	 * 
	 * @memberOf UserProvider
	 */
	public Login(userName: string, password: string) {
		if (this.CheckUserNameIsExisted(userName)) {
			if (this.CheckUserNameAndPasswordIsConsistent(userName, password)) {
				console.log("Login - Login successfully.");
				return true;
			}
		}
		return false;
	}


	private CheckUserNameIsExisted(userName: string) {
		if (this.Users.Where(u => u.username == userName).Count() > 0) {
			return true;
		}
		return false;
	}

	private CheckUserNameAndPasswordIsConsistent(userName: string, password: string) {
		var user = this.Users.FirstOrDefault(u => u.username == userName);
		if (user != null) {
			if (user.password == password) {
				return true;
			}
		}
		return false;
	}

	private BuildSampleData() {
		let user1 = new User();
		user1.username = "phuongvh";
		user1.password = "phuong1";
		user1.displayName = "Phuong Vo";
		user1.email = "phuongvohoai@outlook.com";
		user1.created = Date.now();
		let user2 = new User();
		user2.username = "phuongvh2";
		user2.password = "phuong2";
		user2.displayName = "Phuong Vo2";
		user2.email = "phuongvohoai2@outlook.com";
		user2.created = Date.now();
		let user3 = new User();
		user3.username = "phuongvh3";
		user3.password = "phuong3";
		user3.displayName = "Phuong Vo3";
		user3.email = "phuongvohoai3@outlook.com";
		user3.created = Date.now();
		let user4 = new User();
		user4.username = "phuongvh4";
		user4.password = "phuong4";
		user4.displayName = "Phuong Vo4";
		user4.email = "phuongvohoai4@outlook.com";
		user4.created = Date.now();
		let user5 = new User();
		user5.username = "phuongvh5";
		user5.password = "phuong5";
		user5.displayName = "Phuong Vo5";
		user5.email = "phuongvohoai5@outlook.com";
		user5.created = Date.now();

		this.Users.Add(user1);
		this.Users.Add(user2);
		this.Users.Add(user3);
		this.Users.Add(user4);
		this.Users.Add(user5);


	}

}