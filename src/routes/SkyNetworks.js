import React from 'react';
import axios from 'axios';

class SkyNetworks extends React.Component {

  state = {
    isLoading: true,
    time:'0',
    states: []
  };

  getStates = async () => {
    const {
      data: { states }
    } = await axios.get("https://opensky-network.org/api/states/all");
    this.setState({ states, isLoading: false });
    console.log(states);
  }

  componentDidMount(){
    this.getStates();
  }

  render() {
    const { isLoading, time, states } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="states">
            <div>{time}</div>
            {
              states.map(state => (
                <span style={{marginRight:10}}>{state[2]}</span>
              ))
            }
          </div>
        )}
      </section>
    );

  }
}

export default SkyNetworks;