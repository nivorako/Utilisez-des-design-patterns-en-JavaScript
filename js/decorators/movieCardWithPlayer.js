function movieCardWithPlayer(movieCard) {
    if(movieCard.movie.actor === "sylvester"){
        movieCard.$wrapper.addEventListener("click", () => {
            const player = new PlayerModal(movieCard.movie)
            player.render()
        })
    }
    return movieCard
}
