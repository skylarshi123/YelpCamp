console.log("API Key!!!!:", maptilerApiKey);
console.log("Campground:", campground);

maptilersdk.config.apiKey = maptilerApiKey;

const map = new maptilersdk.Map({
    container: 'map', 
    style: maptilersdk.MapStyle.BRIGHT,
    center: campground.geometry.coordinates, 
  zoom: 7, 
});

new maptilersdk.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new maptilersdk.Popup({ offset:25 })
            .setHTML(
                `<h6>${campground.title}</h6><p>${campground.location}</p>`
            )
    )
    .addTo(map)