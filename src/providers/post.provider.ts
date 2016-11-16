import { List } from '../../node_modules/linqts/linq';
import { IPost } from '../models/post.interface';
import { Post } from '../models/post.model';


export class PostProvider {

	public Posts = new List<IPost>();

	/**
	 * Creates an instance of UserProvider.
	 * 
	 * 
	 * @memberOf UserProvider
	 */
	constructor() {
		this.BuildSampleData();
	}

	public ViewPost(){
		return this.Posts.First();
		
	}

	private BuildSampleData() {
		let post1 = new Post();
		post1.title = "Tuyển nhân viên bán hàng";
        post1.category = "Bán hàng";
        post1.type = "Bán thời gian";
        post1.jobPosition = "Quận 9";
        post1.describe = "Tư vấn, giới thiệu sản phẩm cho khách hàng";
        post1.cost = 20000;
        post1.applyDeadline = "20/11/2016";

		this.Posts.Add(post1);
	}

}