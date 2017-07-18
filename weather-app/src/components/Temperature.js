
var Temperatures = React.createClass({
    getInitialState: function() {
        return {data: []}
    },
    render: function(){
        let data = this.props.data;
        let temperatures= data.map(function(value,index){
            return (
                <div>Day {index+1}: {value}</div>
            )
        });

        return (
            <div>{temperatures}</div>
        )
    }
});

export default Temperatures