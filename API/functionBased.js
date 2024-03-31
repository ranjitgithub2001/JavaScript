function User(username, password){
    this._username=username
    this._password=password

    Object.defineProperty(this, 'username', {
        get: function(){
            return this.username
        },
        set: function(val){
            this.username=val
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this.password
        },
        set: function(val){
            this.password=val
        }
    })
}

const newUSer=new User("Ranjit2001", 12345)
console.log(newUSer);