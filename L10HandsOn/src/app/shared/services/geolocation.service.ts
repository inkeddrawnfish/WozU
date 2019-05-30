import { Injectable } from '@angular/core';

// API Key - Change to your API_KEY
const GEO_API_KEY = "uGGCjGmE7bsA2GJLSUfdH55nt9IKHEUD";

// base URL to MapQuest API
const GEO_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
    getCurrentPosition(city, state) {
        if(!city) throw Error("city is required");
        if(!state) throw Error("state is required");

        // URL to use to acquire the geographic coordinates for a city, state/region
        // `city` and `state` must be valid string values (e.g. Baltimore,MD)
        const url = `${GEO_BASE_URL}?key=${GEO_API_KEY}&location=${city},${state}`;

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(resolve => {
                    if(parseInt(Response.info.statuscode) === 0 ) {
                        response('Portland, ME','Cherokee, NC','Knoxville, TN','Roanoke, VA','Duluth,MN','Burlington, VT','Barlett, NH')
                    }
                    else if(Response.results[0]) {}
                    else if(Response.results[0].locations) {}
                    else if(Response.results[0].locations[0]) {
                        result latLng (43.6669249,-70.3515975)
                    }    
                    else {
                        reject('Unknown error with geo location API')
                    }
                })
                .catch(error => reject(error.message));
        });
    };
}
