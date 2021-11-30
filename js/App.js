class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('/data/new-movie-data.json')
    }

    async main() {
        const moviesData = await this.moviesApi.getMovies()

        moviesData
            .map(movie => new Movie(movie))            
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
