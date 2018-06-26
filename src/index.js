import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"



console.log('hello world ')


const user = document.querySelector('.user1');
const searchInput = document.querySelector('#searchMap');



user.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value
    letsSeeIfChec();

    // getResults(searchTerm)   futere function with url 
    console.log(searchTerm)
})

// function getResults(searchTerm) {
    
    // }
    

const buttonCheck = document.querySelector('.top_buttoms')

buttonCheck.addEventListener('click', (event) => {
    const checkValue = event.target.id

    // if (checkValue.checed)
    //     console.log(checkValue)
})

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


    // const chec
    // crete var each check box 
    // 




    // https: //maps.googleapis.com/maps/api/place/nearbysearch/json?
    // location=-33.8670522,151.1957362
    // &radius=1500&  
    // type=restaurant // night_club // bar 
    // &keyword=cruise& /// not need 
    // key=AIzaSyAzk29EWio3H7I6UvJ0gWJ8rwZeK4Nh8yU // my key 

    function initMap() {
        // The location of Uluru
        var uluru = {
            lat: 40.7831, //{  lat and lng from user location }
            lng: -73.9712
        };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 14,
                center: uluru
            });
        // The marker, positioned at Uluru  with they need !!!!
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            // icon : img
        });
    }



    // var searchBox = new google.maps.places.SearchBox(document.querySelector('.form-control'));

    // google.maps.event.addListener(searchBox, 'place_chenged', function () {
    //     var plase = searchBox.getPlace();

    /// 1:27
    // https://www.youtube.com/watch?v=2n_r0NDekgc
    //      var bound = new google
    // })




    // Where are user  
    //  https://developers.google.com/maps/documentation/geolocation/intro
    //  add json data to grosseries stores or foodplace 
    // save to buttons or send to data location to find 
    //   and try to fix map space to the USA map and create inside google maps




    initMap();