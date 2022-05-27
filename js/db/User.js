class User {
    constructor(data){
        if(User.exists){
            return User.instance
        }else if(data && data.firstName && data.lastName){
            this._firstName = data.firstName
            this._lastName = data.lastName

            this.toSaveLocaleStorage()

            User.instance = this
            User.exists = true

            return this
        } 
    }

    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this.lastName
    }

    get user(){
        const lastName = this._lastName || localStorage.getItem("lastName")
        const firstName = this.firstName || localStorage.getItem("firstName")

        if(lastName && firstName){
            const user = new User({
                lastName,
                firstName
            })
        }
        if(!lastName && !firstName){
            return null
        }

        return {
            firstName: firstName,
            lastName: lastName
        }
    }

    toSaveLocaleStorage(){
        localStorage.setItem('firstName', this._firstName)
        localStorage.setItem('lastName', this._lastName)
    }
}
