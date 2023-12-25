class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}nishant`
    }

    set password(value){
        this._password = value
    }
}

const nishant = new User("n@nishant.ai", "abc")
console.log(nishant.email);          // N@NISHANT.AI
console.log(nishant.password);       // abcnishant
console.log(nishant._email);         // n@nishant.ai
console.log(nishant._password);      // abc 
