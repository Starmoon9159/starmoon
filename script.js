const options = {
    // Required: API key
    key: '4eipqKSfaPI3kxXWoi7xsC8vClon0KhN', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat:24,
    lon:121,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([24, 121])
        .setContent("Taiwan's here")
        .openOn(map);
});