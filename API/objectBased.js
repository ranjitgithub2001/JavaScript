const User={
    _username: 'ranjit2001',
    _password: 123,

    set username(val){
        this._username=val
    },

    get username(){
        return this._username
    },

    set password(val){
        this._password=val
    },

    get password(){
        return this._password
    }
}


const ref1= Object.create(User)
console.log(ref1._username);

