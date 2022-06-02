class WishListCounter {
    constructor(){
        this.count = 0
        this.wrapper = document.querySelector(".wish-count")
    }

    update(action){
        if(action === "ASC"){
            this.count += 1 
        }else if(action ==="DESC"){
            this.count -= 1 
        }else{
            throw "unknown action"
        }

        this.wrapper.innerHTML = this.count
    }
}