import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    loadMap();
  }, []);

  const loadMap = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyClQY2MLUdsJcdjF1P9Y4DBWVJ8taAaZW8&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);
  };

  window.initMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          var map = new window.google.maps.Map(document.getElementById("map"), {
            center: pos,
            zoom: 15,
          });

          var marker = new window.google.maps.Marker({
            position: pos,
            map: map,
          });
        },
        function () {
          // Handle location error here
        }
      );
    } else {
      // Browser doesn't support Geolocation
    }
  };

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComponent;
