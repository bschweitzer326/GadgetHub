import React from 'react';
import {
    GoogleMap, 
    useLoadScript,
    Marker,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
    getLatLng,
    getGeocode,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput, 
    ComboboxPopover,
    ComboboxOption,
} from "@reach/combobox";
const libraries = ["places"];
const mapContainerStyle= {
    width: '1000px',
    height: '650px',
    margin: 'auto',
}
let LAT;
let LNG;
const Map = props => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude:lat, longitude:lng } = position.coords;
            LAT = lat;
            console.log(LAT);
            LNG = lng;
            console.log(LNG);
        })
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAMvK2aFTjWTpEVcoX7C7wpOBlUiKaYNcM", libraries,
    });
    const center ={
        lat: LAT,
        lng: LNG,
    }

    const options = {
        zoomControl: true,
        zoom: 13,
    }

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const moveTo = React.useCallback(({lat, lng}) => {
            console.log("Something");
            mapRef.current.moveTo({lat, lng});
            mapRef.current.setZoom(15);
        }, []);

    
    if(loadError) return "Error loading the map";
    if(!isLoaded) return "Still loading the map";

    return(
        <div className="container">
            <h1 style={{fontSize: "40px", marginTop: "70px", marginBottom: "20px"}}>Google Map</h1>
            <Search moveTo={moveTo}/>
            <GoogleMap id="map" mapContainerStyle={mapContainerStyle} center={center} options={options} onLoad={onMapLoad}>
                <Marker position={{lat: LAT, lng: LNG}}/>
            </GoogleMap>
        </div>
    )
}

const Search = (moveTo) => {
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => LAT, lng: () => LNG},
            radius: 100000,
        }
    });
    return (
        <div className="mt-4  mb-2 col-5">
            <Combobox onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions();
                try {
                    const results = await getGeocode({address});
                    const {lat, lng} = await getLatLng(results[0]);
                    console.log(lat, lng);
                    moveTo = () => moveTo({lat, lng});
                } catch(error) {
                    console.log("error", error)
                }
            }}
            >
                <ComboboxInput value={value} onChange={(e) => {setValue(e.target.value);}} disabled={!ready} style={{marginLeft: "40px", width: "1000px", height: "40px", fontSize: "20px", background: "rgba(255,255,255,.6)"}} placeholder="Search" className="form-control"/>
                <ComboboxPopover style={{backgroundColor: "white", fontSize: "20px", background: "rgba(255,255,255,.95)", paddingLeft: "25px"}}>
                    {status === "OK" && data.map(({id, description}) => ( <ComboboxOption key={id} value={description} />))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
export default Map;
