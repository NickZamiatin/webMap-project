import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

// console.log('hello world ')

const user = document.querySelector('#apply-buttom');
const searchInput = document.querySelector('#searchMap');
var myLatlng;
var map;
const cors = "https://galvanize-cors.herokuapp.com/"

user.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value

    let userInputAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyB386cmYAo7WGgHqAyzWMBTBBDCAr6ynDQ`
    myLatlng = userInputAddress

    fetch(userInputAddress)

        .then(response => response.json())
        .then(result => {
            var location = result.results["0"].geometry.location;

            map.setCenter(location);
            const types = letsSeeIfChec();
            // console.log(types)
            let userCheckBoxURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=850&type=${types}&keyword=cruise&key=AIzaSyB386cmYAo7WGgHqAyzWMBTBBDCAr6ynDQ`

            fetch(cors + userCheckBoxURL)
                .then(response => response.json())
                .then(result => {
                    var icon = result.results

                    for (let i = 0; i < icon.length; i++) {
                        console.log(icon[i].geometry.location)
                        console.log(icon[i].icon)
                        new google.maps.Marker({

                            position: icon[i].geometry.location,
                            map: map,
                            icon: icon[i].icon,
                            size: new google.maps.Size(20, 25)

                        });
                    }
                })

            console.log(myLatlng)
            console.log(userCheckBoxURL)
        })
        .catch(error => console.error(error))

    console.log(searchTerm)
    console.log(myLatlng)
})
const buttonCheck = document.querySelector('.top_buttoms')

buttonCheck.addEventListener('click', (event) => {
    const checkValue = event.target.id
})

function letsSeeIfChec() {
    let types = [];
    if (document.getElementById('restaurant').checked) {
        types.push("restaurant")
        // console.log("checked ")
    }

    if (document.getElementById('night_club').checked) {
        types.push("night_club")
    }

    if (document.getElementById('bar').checked) {
        types.push("bar")
    }
    return types.join(',')
}

// https: //maps.googleapis.com/maps/api/place/nearbysearch/json?
// location=-33.8670522,151.1957362
// &radius=1500&  
// type=restaurant // night_club // bar 
// &keyword=cruise& /// not need 
// key=AIzaSyAzk29EWio3H7I6UvJ0gWJ8rwZeK4Nh8yU // my key 
// add pins to map

function initMap() {
    // The location of myLatlng
    myLatlng = {
        lat: 40.7831, //{  lat and lng from user location }
        lng: -73.9712
    };
    console.log(myLatlng)
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 14,
            center: myLatlng

        });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });

}

initMap();