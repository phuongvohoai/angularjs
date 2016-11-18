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

	public ViewPost(index: number){
		return this.Posts.ElementAt(index);
		
	}

	private BuildSampleData() {
		let post1 = new Post();
		post1.title = "Tuyển NV bán hàng";
        post1.category = "Bán hàng";
        post1.type = "Bán thời gian";
        post1.jobPosition = "Quận 9";
        post1.describe = "Tư vấn, giới thiệu sản phẩm cho khách hàng";
        post1.cost = 20000;
        post1.applyDeadline = "20/11/2016";
		post1.distance = 200;
    	post1.status = "Đã xong";
		let post2 = new Post();
		post2.title = "Tuyển nhân viên IT";
        post2.category = "IT";
        post2.type = "Hợp đồng";
        post2.jobPosition = "Quận Bình Thạnh";
        post2.describe = "Bảo trì hệ thống";
        post2.cost = 50000;
        post2.applyDeadline = "30/11/2016";
		post2.distance = 100;
    	post2.status = "Chưa xong";
		let post3 = new Post();
		post3.title = "Tuyển người ở";
        post3.category = "Khác";
        post3.type = "Toàn thời gian";
        post3.jobPosition = "Quận Thủ Đức";
        post3.describe = "Nấu cơm, lau dọn nhà cửa";
        post3.cost = 30000;
        post3.applyDeadline = "29/11/2016";
		post3.distance = 100;
    	post3.status = "Chưa nhận";

		this.Posts.Add(post1);
		this.Posts.Add(post2);
		this.Posts.Add(post3);
	}

}