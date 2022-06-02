class WishListSubject {
    constructor(){
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    fire(action){
        this.observers.forEach(obs => obs.update(action))
    }
}
