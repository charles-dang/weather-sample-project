var Button = ReactBootstrap.Button;

var Locations = React.createClass({
    getInitialState: function() {
        return {locations: []}
    },

    componentDidMount: function() {
        $.ajax({
            url: '/weather/locations?',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({locations: JSON.parse(data).data});
                console.log(">>>>",JSON.parse(data).data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('componentDidMount ERR:', err.toString());
            }.bind(this)
        });
    },
    render: function(){
        let data=this.state.locations;

        let locations= data.map(function(value){
            return <Button key={value} onClick={() => this.getTemperatures(value)}>{value}</Button>
        }.bind(this));

        return (
            <div>Currently tell temperature at the following locations only<br/>
            {locations}
            </div>
        )
    },
    getTemperatures: function(location){
        console.log("getting temp at loc:", location);
        $.ajax({
            url: '/weather/'+location,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.props.updateTemperatures(JSON.parse(data).data);
                console.log("temps:",JSON.parse(data).data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('componentDidMount ERR:', err.toString());
            }.bind(this)
        });
    }
});

export default Locations