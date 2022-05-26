class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
        //this.externalMoviesApi = new MovieApi("/data/external-movie-data.json")
    }

    async main() {

    
        const oldMoviesData = await this.oldMoviesApi.getMovies()
        const newMoviesData = await this.newMoviesApi.getMovies()
       // const externalMoviesData = await this.externalMoviesApi.getMovies()

        const oldMovies = oldMoviesData.map(movie => new MoviesFactory(movie, 'oldApi'))
        const newMovies = newMoviesData.map(movie => new MoviesFactory(movie, "newApi"))
        //const externalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        const fullMovies = newMovies.concat(oldMovies)

        fullMovies          
            .forEach(movie => {

            console.log('========');
            console.log(movie);
            console.log('========');


            const Template = new MovieCard(movie) 
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })    
    }
}

const app = new App()
app.main()
