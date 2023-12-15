import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const Map = () => {
    const position = [48.8534, 2.3488] as LatLngExpression;


    return (
        <>
        <div>
            <MapContainer center={position} zoom={13} >

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            </div>
        </>
    )
}