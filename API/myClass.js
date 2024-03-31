class User{
    constructor(username, password){
        this.username=username
        this.password=password
    }

    get username(){
        return this._username
    } 

    set username(val){
        this._username=val
    }

    get password(){
        return this._password
    }

    set password(val){
        this._password=val
    }
}

const userOne=new User("Ranjit2001", 'rk007')


console.log(userOne);
