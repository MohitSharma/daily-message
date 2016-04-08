import React from 'react';

class DailyMessage extends React.Component {
    constructor() {
        super();
    }
    static get defaultProps() {
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
            dailyMessage : dailyMessage,
            customMessage: "!"
        };
    }

    render () {
        return (
            <div className={this.props.customClass}>
                {this.props.dailyMessage} {this.props.customMessage}
            </div>
        );
    }
}

DailyMessage.propTypes = {
    customMessage: React.PropTypes.string,
    customClass: React.PropTypes.string
};

export default DailyMessage;