class UserContext {
    constructor(){
        this.state = [
            new AnonymousUserState(),
            new UserConnectedState()
        ]
        this.currentState = this.getInitialState()
    }

    getInitialState(){
        const user = new User()
        const[AnonymousUserState, UserConnectedState] = this.state

        if(!user.user){
            return AnonymousUserState
        }else{
            return UserConnectedState
        }
    }

    change(firstName, lastName){
        const user = new User({
            firstName,
            lastName
        })

        this.currentState = this.state[1]
    }
}