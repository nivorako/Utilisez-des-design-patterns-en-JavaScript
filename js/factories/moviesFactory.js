class MoviesFactory {
    constructor(data, type) {
        // si le type correspond à l'ancienne API, alors retornes moi l'ancien formatage 
        if(type === 'oldApi'){
            return new OldMovie(data)
        }else if(type === 'newApi'){
            return new Movie(data)
        }else if(type === "externalApi"){
            return new ExternalMovie(data)
        }else{
            throw 'Unknown format type'
        }
    }
}