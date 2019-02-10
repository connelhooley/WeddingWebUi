// tslint:disable:no-unused-expression
// tslint:disable:max-line-length
import loadGoogleMapsApi from "load-google-maps-api";

import { getConfig } from "./config";

export async function setupMapsApi(element: HTMLDivElement): Promise<void> {
    const { googleMapsApiKey: key } = getConfig();
    const libraries = ["places"];
    const googleMapsApi = await loadGoogleMapsApi({key, libraries});
    const map = createMap(googleMapsApi, element);
    const place = await loadPlace(googleMapsApi, map);
    const infoWindow = createInfoWindow(place);
    const marker = createMarker(googleMapsApi, map, place, infoWindow);
    map.setCenter(marker.getPosition());
    infoWindow.open(map, marker);
}

function createMap(googleMapsApi: typeof google.maps, element: HTMLDivElement): google.maps.Map {
    const options: google.maps.MapOptions = {
        zoom: 10,
        center: { lat: 52.6309, lng: 1.2974 }, // Norwich
    };
    return new googleMapsApi.Map(element, options);
}

async function loadPlace(
    googleMapsApi: typeof google.maps,
    map: google.maps.Map,
): Promise<google.maps.places.PlaceResult> {
    return new Promise((resolve, reject) => {
        const service = new googleMapsApi.places.PlacesService(map);
        const options: google.maps.places.PlaceDetailsRequest = {
            placeId: "ChIJrQn_uIxh10cRfAxgnBfE33o",
        };
        service.getDetails(options, (place, status) => {
            if (status === googleMapsApi.places.PlacesServiceStatus.OK) {
                resolve(place);
            } else {
                reject("Failed to find place ID");
            }
        });
    });
}

function createMarker(
    googleMapsApi: typeof google.maps,
    map: google.maps.Map,
    place: google.maps.places.PlaceResult,
    infoWindow: google.maps.InfoWindow,
): google.maps.Marker {
    const marker = new googleMapsApi.Marker({
        map,
        position: place.geometry.location,
    });
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
    return marker;
}

function createInfoWindow(
    {
        name,
        formatted_phone_number: phoneNumber,
        international_phone_number: intPhoneNumber,
        formatted_address: address,
        url}: google.maps.places.PlaceResult,
): google.maps.InfoWindow {
    const telLinkPhoneNumber = intPhoneNumber.replace(/\s/g, "");
    return new google.maps.InfoWindow({
        content: `
            <h2>${name}</h2>
            <p>${address}</p>
            <p><a target="_BLANK" href="tel:${telLinkPhoneNumber}">${phoneNumber}</a></p>
            <p>If your invite specifies you have been allocated a room, please call Lenwade Hotel to secure your booking</p>
            <p><a target="_BLANK" href="${url}">View on Google Maps</a></p>
        `,
    });
}
