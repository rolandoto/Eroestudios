import React, { useState, useRef, useCallback } from "react";
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import './Home.css'
import UseCart from "../../hooks/UseCart";

const  Home =()  =>{
  // Store Polygon path in state
  const [path, setPath] = useState([
    { lat: 52.52549080781086, lng: 13.16618372440334  },
    { lat: 52.48578559055679, lng: 13.16618372440334  },
    { lat: 52.48871246221608, lng: 13.16618372440334 },
    { lat: 52.48850340641365, lng: 13.218883767127942 },
    { lat: 52.524237507232066, lng: 13.216652169227551 }
  ]);

  const {AddCart} = UseCart()
  // Define refs for Polygon instance and listeners
  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map(latLng => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  // Bind refs to current Polygon and listeners
  const onLoad = useCallback(
    polygon => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );
    console.log(path[1])
  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach(lis => lis.remove());
    polygonRef.current = null;
  }, []);
  
  return (
    <div className="App">
      <LoadScript
        id="script-loader"
        googleMapsApiKey=""
        language="en"
        region="us"
      >
        <GoogleMap
          mapContainerClassName="App-map"
          center={{ lat: 52.52047739093263, lng: 13.36653284549709 }}
          zoom={12}
          version="weekly"
          on
        >
          
          <Polygon
            // Make the Polygon editable / draggable
            editable
            draggable
            path={path}
            // Event used when manipulating and adding points
            onMouseUp={onEdit}
            // Event used when dragging the whole Polygon
            onDragEnd={onEdit}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </GoogleMap>
      </LoadScript>
    
      <div>
        {path.map((index) =>(
          <div>
            <h1 > coordenadas {index.lat} ,{index.lng} </h1>
           <button onClick={() => AddCart(index)}> Agregar cart compras</button> 
          </div>
        ))}

      </div>
      
    </div>
  );
}

export default Home