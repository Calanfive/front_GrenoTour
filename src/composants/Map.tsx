import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const Map = () => {
    const position_Grenoble = [45.166672, 5.71667] as LatLngExpression;
    const positions = [[45.166672, 5.71667], [45.150002, 5.75], [45.7578137, 4.832011]] as LatLngExpression []; 


    return (
        <>
            <div>
                <MapContainer center={position_Grenoble} zoom={13} >

                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {positions.map((position, index) => (
                        <Marker key={index} position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))}
                    {/* <Marker position={position_Grenoble}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position_Eybens}>
                    </Marker> */}
                </MapContainer>
            </div>
        </>
    )
}