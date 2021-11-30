class Movie {
    constructor(data){
        this._duration = data.duration
        this._picture = data.picture
        this._released_in = data.released_in
        this._synopsis = data.synopsis
        this._title = data.title
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`;
    }

    get picture() {
        return `/assets/${this._picture}`;
    }

    get released_in() {
        return this._released_in;
    }

    get duration() {
        const hours = Math.floor(this._duration/60);
        const min = this._duration % 60;
        return `${hours}heure et ${min}minutes`;
    }

    get title() {
        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title["en"];
    }

    get synopsis() {
        return this._synopsis;
    }
}
