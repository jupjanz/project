import React from 'react'
const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAThdp0jjkh6Fv6akKKIAesW8vbttDZHW0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  

  lifecycle({
    UNSAFE_componentWillMount() {
      const refs = {}
      this.setState({
        bounds: null,
        center: {
          lat: 13.736717, lng: 100.523186
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },

        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new window.google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>


  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={13}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    marker={props.marker}
    option={{draggable: true}}
    onClick={props.onClick}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    {/* {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )} */}
    <Marker
      position={props.marker}
      onClick= {props.onClick}
    />
  </GoogleMap>
);


class MapWithASearchBoxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        address: {
            location: {
                lat: '13.736717',
                lng: '100.523186'
            }
        }
    };
}
  changeLocation = (event) => {
    console.log(event)
    this.setState({
      address: {
        location: {
          lat: 13.736717,
          lng: 101.523186
        }
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <Map onClick={this.changeLocation}
      defaultZoom={15}
      center={this.changeLocation}
      option={{draggable: true}}
      marker={this.state.address.location}
      />
    )
  }
}

export default MapWithASearchBoxs;