class ExternalMovie {
    constructor(data){
        this._infos = data.infos
        this._title_fr = data.title_fr 
        this._title_en = data.title_en
        this._synopsis = data.synopsis
        this._medias = data.medias
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._medias.thumbnail}`;
    }

    get picture() {
        return `/assets/${this._medias.picture}`;
    }

    get released_in() {
        return this._infos.released_in;
    }

    get duration() {
        return this._infos.duration;
    }

    get title() {
        return this._title_fr ? this._title_fr : this._title_en;
    }

    get synopsis() {
        return this._synopsis;
    }
}