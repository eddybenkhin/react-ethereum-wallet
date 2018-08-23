import React, { Component } from 'react';
// ignore this comment
const GlobalNotificationTypes = [error, warning, info, success, animate]

class GlobalNotification extends Component {
  render() {
    return (
      <div className="global-notifications">
        <div className="global-notification warning">
          <p>Couldn't parse the JSON Interface.</p>
        </div>
      </div>
    )

  }

}

export default GlobalNotification;
