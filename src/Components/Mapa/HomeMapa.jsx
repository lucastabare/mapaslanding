import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Argentina from "svg-maps/maps/argentina";
import { useState } from "react";
import { getLocationName, getLocationId } from "../../utils.js"
function HomeMapa() {
  const [clickedLocation, setClickedLocation] = useState();

  const handleLocation = (e) => {
    const location = getLocationName(e);
    const clickesLocationId = getLocationId(e);
    setClickedLocation(location);
  }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 mt-10 text-center">
          <div className="row">
            <div className="col-6">
              <h3>Seleciona tu localidad</h3>
              <p>Localidad: {clickedLocation}</p>
            </div>
            <div className="col-6">
              <SVGMap map={Argentina} type="link" onLocationClick={handleLocation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMapa;
