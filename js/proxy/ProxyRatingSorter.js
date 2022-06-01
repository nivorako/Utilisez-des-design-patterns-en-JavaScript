class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sorter(movies, orderBy) {
        // s'assurer que le cache ne soit vide
        const cashResult = this.cache.find(elt => elt.key === orderBy)
        if(cashResult){
            console.log('Get from cache')
            return cashResult
        }
        const data = await RatingSorterApi.sorter(movies, orderBy)

        this.cache.push(data)
        return data
    }
}
