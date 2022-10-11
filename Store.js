import React from 'react';
import Maps from './googlemaps';
import axios from 'axios';
import '../styles/store.scss';

class Stores extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [{
        id: 1,
        name: 'Harrington Road',
        address: '#74, Harrington Road,Chetpet,Chennai-31',
        center: {
          lat: 13.0707775,
          lng: 80.2298869,
        },
        zoom: 11,
      }, {
        id: 2,
        name: 'Alwarpet',
        address: '#50, CP Ramaswamy Iyer road, Alwarpet, Chennai-18',
        center: {
          lat: 13.031678,
          lng: 80.2546247,
        },
        zoom: 11,
      }, {
        id: 9,
        name: 'Adyar',
        address: '#17, 1st Main Road, Gandhi Nagar, Adyar, Chennai-600020',
        center: {
          lat: 13.0070965,
          lng: 80.2524731,
        },
        zoom: 11,
      }, {
        id: 10,
        name: 'Anna Nagar',
        address: 'K 28, 1st Ave, Block K, Annanagar East, Chennai, Tamil Nadu 600102',
        center: {
          lat: 13.090901,
          lng: 80.223380,
        },
        zoom: 11,
      }, {
        id: 16,
        name: 'T.Nagar',
        address: 'Pothys Boutique,105-107, Gopathi Narayanaswami Chetty Rd, Parthasarathi Puram, T.Nagar, Chennai-600017',
        center: {
          lat: 13.0445473,
          lng: 80.2376396,
        },
        zoom: 11,
      },
      {
        id: 3,
        name: 'Velachery',
        address: '#13, Velachery Rd, Dhadeswaram Nagar, Velachery, Chennai-600042',
        center: {
          lat: 12.9846413,
          lng: 80.220817,
        },
        zoom: 11,
      }, {
        id: 4,
        name: 'Guduvanchery',
        address: '#20, Grand Southern Trunk (GST) Road, Guduvanchery, Chennai-603203',
        center: {
          lat: 12.8499529,
          lng: 80.0629272,
        },
        zoom: 11,
      }, {
        id: 5,
        name: 'Chitlapakkam',
        address: '21, Chitlapakkam Main Road, Gomathy Nagar, Selaiyur, Chennai, Tamil Nadu 600065',
        center: {
          lat: 12.932149,
          lng: 80.148504,
        },
        zoom: 11,
      }, {
        id: 6,
        name: 'Ambattur',
        address: '#B17, OMR Food Street, Telephone Exchange stop, Ambattur Industrial Estate, Chennai-600053',
        center: {
          lat: 12.849925,
          lng: 79.9950758,
        },
        zoom: 11,
      }, {
        id: 8,
        name: 'Medavakkam',
        address: '#135/136, Ground floor, PVG Tower, Velachery road, Medavakkam, Chennai-600100',
        center: {
          lat: 12.9177664,
          lng: 80.1867429,
        },
        zoom: 11,
      }, {
        id: 11,
        name: 'KK Nagar, Madurai',
        address: 'Ground Floor, Milanem Mall, 100 Feet Rd, Managiri, KK Nagar, Madurai, Tamil Nadu 625020',
        center: {
          lat: 9.9277875,
          lng: 78.1409817,
        },
        zoom: 11,
      }, {
        id: 12,
        name: 'Madurai',
        address: 'Vishal de Mall, 4th Floor Food Court, Madurai,  Tamil Nadu 625020',
        center: {
          lat: 9.938274,
          lng: 78.1339019,
        },
        zoom: 11,
      }, {
        id: 13,
        name: 'Ambur',
        address: '#10 NH48, Ambur, Vellore District, Somalapuram, Tamil Nadu 635802',
        center: {
          lat: 20.7542678,
          lng: 73.048026,
        },
        zoom: 11,
      }, {
        id: 14,
        name: 'KK Nagar, Chennai',
        address: 'No 894, Munuswamy Street, K K Nagar West, Chennai-600078',
        center: {
          lat: 13.040601,
          lng: 80.1912539,
        },
        zoom: 11,
      }, {
        id: 15,
        name: 'Padur',
        address: 'S-637/2,Omr, Padur, Chennai, Tamil Nadu 603103',
        center: {
          lat: 12.8147976,
          lng: 80.2269416,
        },
        zoom: 11,
      }],
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/store');
      const stores = res.data.map((d) => {
        d.center = {
          lat: d.lat,
          lng: d.lon,
        };
        return d;
      });
      this.setState({ stores });
    } catch (err) {
      console.log('Hey dude this is err');
    }
  }

  render() {
    return (
      <div className="mdl-grid">
        <div>
          <div className="store-header mdl-shadow--8dp">
            <span className="store-title mdl-layout-title_font"> Our Stores </span>
          </div>
          <div className="mdl-grid-custom-stores mdl-shadow--8dp">
            {this.state.stores.map((store) => {
              const MapUrl = `https://www.google.com/maps/search/?api=1&query=${store.center.lat},${store.center.lng}`;
              return (
                <div className="mdl-card map-card mdl-shadow--3dp" key={store.id}>
                  <Maps center={store.center} zoom={store.zoom} />
                  <div className="mdl-card__supporting-text mdl-card__supporting-custom-Height">
                    <div className="headerText">
                      {store.name}
                    </div>
                    <div className="addressText">
                      {store.address}
                    </div>
                  </div>
                  <div className="mdl-card__actions mdl-card--border mdl-card-color">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-store-font-color" target="_blank" href={MapUrl}>
                      Start <i className="material-icons">near_me</i>
                    </a>
                  </div>
                </div>
      );
      })}
          </div>
        </div>
      </div>
    );
  }
}

export default Stores;
