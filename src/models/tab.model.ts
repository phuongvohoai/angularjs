export class Tab {
  Root: any;
  Title: string;
  TabIcon: string;

  constructor(root: any, title: string, tabIcon?: string){
    this.Root = root;
    this.Title = title;
    this.TabIcon = tabIcon || "";
  }
}