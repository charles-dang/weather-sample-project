const React = require('react');
import Locations from './components/Locations.js'
import Temperatures from './components/Temperature.js'

var Layout = React.createClass({
    getInitialState: function() {
        return {temperatures:[0,0,0,0,0,0,0]};
    },
    render: function() {
        return(
            <div>
                <div>Temperature App</div>
                <div>
                    <Locations updateTemperatures={this.updateTemperatures}/>
                </div>
                <div>
                    <Temperatures data={this.state.temperatures}/>
                </div>

            </div>
        )
    },
    updateTemperatures: function(temps){
        this.setState({temperatures:temps});
    }
});

ReactDOM.render(<Layout />, document.getElementById('mainLayout'));