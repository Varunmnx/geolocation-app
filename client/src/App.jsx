import { useState } from 'react'
import './App.css'
import { io } from "socket.io-client"
import { useEffect } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker , Popup } from 'react-leaflet'


function App() {
  const [socketId, socketIdSetter] = useState(0)
  const socket = io("http://localhost:3000")
  useEffect(()=>{
    socket.on("connect",()=>{
                               console.log(socket.id)
                               socketIdSetter(socket.id)
                             }) },[socket.id])
  return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
          <Marker position={[28.7041, 77.1025]}>
            <Popup>
                 Delhi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum perferendis tempora quia ut, vel voluptas beatae quasi! Ipsam officiis et qui necessitatibus reiciendis itaque a quaerat totam facere, eveniet molestias!
            </Popup>
          </Marker>
          <Marker position={[12.9716, 77.5946]}>
            <Popup>
                 Bengaluru Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, molestias neque, repellat, quasi aliquam voluptates quisquam id modi incidunt consequatur perspiciatis nesciunt architecto. Assumenda delectus reprehenderit inventore cum dolor natus.
            </Popup>
          </Marker>

          <Marker position={[9.9312, 76.2673]}>
            <Popup>
                 Kochi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora possimus consequatur dicta, accusamus voluptatum, minima sed nobis qui officiis aspernatur, aut repellendus animi ab doloribus exercitationem. Sunt, qui. Magni.
            </Popup>
          </Marker>

        </MapContainer>

  )
}

export default App
