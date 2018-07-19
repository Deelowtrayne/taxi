const Nominatim = require('nominatim-geocoder');
module.exports = function() {
    const geocoder = new Nominatim();

    async function search(loc) {
        let result = await geocoder.search( { q: loc } )
        return result; 
    }

    return {
        search,
    }
}