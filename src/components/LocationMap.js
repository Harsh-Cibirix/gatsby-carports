import React, { Component } from "react"
import ReactMapboxGl, {Layer, Feature, Map} from "react-mapbox-gl"

class LocationMap extends Component{
    Map = ReactMapboxGl({
        accessToken:
          'undefined'
      });

    render(){
        return(
            <section class="section map-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="section__title map-section__title">We Got you covered in these Four states</h4>
                        <div id="map" class="map map-section__grid">
                        <Map className="map map-section__grid" style="mapbox://styles/mapbox/streets-v9"> 
                            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                            </Layer>
                        </Map>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default LocationMap