import React from 'react'
import { getAddress } from './GetAddress'
const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAThdp0jjkh6Fv6akKKIAesW8vbttDZHW0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `550px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({

    componentWillReceiveProps(nextProps) {
      this.setState({
        center: {
          lat: parseFloat(nextProps.center.lat) || '', lng: parseFloat(nextProps.center.lng) || ''
        },
        markers: {
          lat: parseFloat(nextProps.markers.lat), lng: parseFloat(nextProps.markers.lng)
        }
      })
    },

    componentWillMount() {
      const refs = {}
      this.setState({
        bounds: null,
        center: {
          lat: 13.736717, lng: 100.523186
        },
        // markers:[],
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
            markers: nextMarkers ? { lat: nextMarkers[0].position.lat(), lng: nextMarkers[0].position.lng() } : this.props.markers
            // markers: {lat:nextMarkers[0].position.lat(),lng:nextMarkers[0].position.lng()},
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
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    markers={props.markers}
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
    <InfoBox
      position={new window.google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Here's your Home
        </div>
      </div>
    </InfoBox>
    <Marker
      position={props.markers}
    />
  </GoogleMap>
);

class MapWithASearchBoxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        location: {
          lat: parseFloat(13.736717),
          lng: parseFloat(100.523186)
        }
      }
    }
  }
  changeLocation = async (event) => {
    this.setState({
      address: {
        location: {
          lat: parseFloat(event.latLng.lat()),
          lng: parseFloat(event.latLng.lng())
        }
      }
    })
    const address = await getAddress(this.state.address.location.lat + ',' + this.state.address.location.lng)
    this.setState({
      formatAddress : address
    })
  }

  render() {
    return (
      <div>
      <Map onClick={this.changeLocation}
        defaultZoom={15}
        center={this.state.address.location}
        option={{ draggable: true }}
        markers={this.state.address.location}
      />
      <h3>{this.state.formatAddress}</h3>
       </div>
    )
  }
}

export default MapWithASearchBoxs;