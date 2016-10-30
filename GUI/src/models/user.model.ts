export class User {
    // Variables
    public displayName: string;
    public username: string;
    public password: string;
    public email: string;
    public created: string;
    // Constructor
    constructor(user: User){
        this.displayName  = user.displayName;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.created = user.created;
    }
}
