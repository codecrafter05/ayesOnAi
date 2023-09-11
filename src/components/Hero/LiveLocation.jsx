import React, { useEffect } from "react";

const MapComponent = () => {
  const loadMap = () => {
    return new Promise((resolve) => {
      // Check if the script is already loaded
      const existingScript = document.querySelector(
        'script[src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClQY2MLUdsJcdjF1P9Y4DBWVJ8taAaZW8&callback=initMap"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyClQY2MLUdsJcdjF1P9Y4DBWVJ8taAaZW8`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = resolve;
      } else {
        resolve();
      }
    });
  };

  const initMap = (position) => {
    if (!position) {
      // Geolocation not available or permission denied
      return;
    }

    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: pos,
      zoom: 15,
    });

    const marker = new window.google.maps.Marker({
      position: pos,
      map: map,
    });
  };

  const handleLocationError = (browserHasGeolocation) => {
    // Handle location error here
  };

  const requestGeolocation = async () => {
    await loadMap();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(initMap, handleLocationError);
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false);
    }
  };

  useEffect(() => {
    requestGeolocation();
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComponent;
