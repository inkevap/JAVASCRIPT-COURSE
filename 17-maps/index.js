let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: 14.686370228996287, 
        lng: -90.64253675528751
    }
    
    const posicion2 = {
        lat: 14.608810467219852, 
        lng: -90.66448839796968
    }

    const posicion3 = {
        lat: 14.68346494492175, 
        lng: -90.7050326703323
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "lugar inicial"
    }) 

    marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "lugar intermedio"
    })

    marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Ultimo lugar"
    })


}