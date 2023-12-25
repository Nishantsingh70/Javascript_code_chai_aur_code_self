class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.logMe())
// console.log(hitesh.createId())  // you can't access any static method from parent as well as its child class

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());
console.log(iphone.createId());  // you can't access any static method from parent as well as its child class

