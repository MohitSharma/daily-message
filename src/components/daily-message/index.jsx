import React from 'react';

const DailyMessage = React.createClass({
    propTypes: {
        customMessage: React.PropTypes.string,
        customClass: React.PropTypes.string
    },
    getDefaultProps () {
        let hrs = new Date().getHours();
        let dailyMessage = "Good Day";
        if (hrs >=0 && hrs < 12) {
            dailyMessage = "Good Morning";
        }
        else if (hrs >= 12 && hrs < 18) {
            dailyMessage = "Good Afternoon";
        }
        else if (hrs >= 18 && hrs < 24) {
            dailyMessage = "Good Night"
        }
        return {
            dailyMessage: dailyMessage,
            customMessage: '!'
        };
    },
    render () {
        return (
            <div className={this.props.customClass}>
                {this.props.dailyMessage} {this.props.customMessage}
            </div>
        );
    }
});

export default DailyMessage;