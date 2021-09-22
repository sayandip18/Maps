mapboxgl.accessToken = 'pk.eyJ1Ijoic2F5YW5kaXAiLCJhIjoiY2t0dnlyM2gwMmYxNTJwcTVjMm5wOWhkayJ9.Pr4cwn1Nw_5EbTBuaE041Q'

navigator.geolocation.getCurrentPosition( successLocation, errorLocation, 
    { enableHighAccuracy: true }
)

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15
    })
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/cycling'
    });

    map.addControl(directions, 'top-left');
}

