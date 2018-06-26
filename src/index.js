import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

console.log('hello world ')


const user = document.querySelector('#apply-buttom');
const searchInput = document.querySelector('#searchMap');
var myLatlng;
var map;

user.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value
    
    let userInputAddress = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyAzk29EWio3H7I6UvJ0gWJ8rwZeK4Nh8yU`
    // let userCheckBoxURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=850&type=${types}&keyword=cruise&key=AIzaSyB386cmYAo7WGgHqAyzWMBTBBDCAr6ynDQ`
    myLatlng = userInputAddress

    fetch(userInputAddress)

    .then(response => response.json())
    .then(result =>{
       var location = result.results["0"].geometry.location;

        map.setCenter(location);
        letsSeeIfChec();

        fetch()



// fetch places API  with location and types  
    })
    .catch(error => console.error(error))


    
    // getResults(searchTerm)   futere function with url 
    console.log(searchTerm)
    console.log(myLatlng)
})



const buttonCheck = document.querySelector('.top_buttoms')

buttonCheck.addEventListener('click', (event) => {
    const checkValue = event.target.id
})
let arr =[];

let type = "";

function letsSeeIfChec() {
    if (document.getElementById('restaurant').checked) {
        type += "restaurant"
        console.log("checked ")
    } else if (document.getElementById('night_club').checked) {
        type += "night_club"
    } else if (document.getElementById('bar').checked) {
        type += "bar"
    } else {
        type
    }
    
}


// https: //maps.googleapis.com/maps/api/place/nearbysearch/json?
// location=-33.8670522,151.1957362
// &radius=1500&  
// type=restaurant // night_club // bar 
// &keyword=cruise& /// not need 
// key=AIzaSyAzk29EWio3H7I6UvJ0gWJ8rwZeK4Nh8yU // my key 

function initMap() {
    // The location of myLatlng
    myLatlng = {
        lat: 40.7831, //{  lat and lng from user location }
        lng: -73.9712
    };

        console.log(myLatlng)

    // The map, centered at myLatlng
     map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 14,
            center: myLatlng

        });
        // The marker, positioned at myLatlng  with they need !!!!
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            // icon : img
        });
    }
    




    initMap();