import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/navbar.css';
import { HeaderField, NetworkHeader, BalanceHeader } from './elements/navbarFields';
import { DefaultNavFields } from '../constants/FieldConstants.jsx';

const SwitchHeader = ({ field, i }) => {
  if (field.type === 'peerInfo') {
    return <NetworkHeader field={field} key={`navfield-${i}`} />;
  } else {
    return <BalanceHeader field={field} key={`navfield-${i}`} />;
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // var cn = require('classnames');
    // this.state = {
    //   totalBalance: 0.0
    // };
  }

  componentWillReceiveProps(nextProps) {
    console.log("before props", this.props)
    console.log("before state", this.state)

    if(nextProps.CurrencyUnit) {
      console.log(nextProps.CurrencyUnit)
      this.props.currency = nextProps.CurrencyUnit
    }

      if(nextProps.currency) {
        console.log(nextProps.currency)
        // this.state['currency'] = nextProps.currency
      }
    console.log("after props", this.props)
    console.log("after state", this.state)

  }


  

  render() {
    return (
      <header className="dapp-header dapp-full-header">
        <nav>
          <ul>
            {DefaultNavFields.map(
              (f, i) =>
                f.type === 'link' ? (
                  <HeaderField field={f} key={`navfield-${i}`} />
                ) : (
                  <SwitchHeader field={f} i={i} key={`navfield-${i}`} />
                )
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  // isThisState: state,
  currency: state.currency
});



export default connect(mapStateToProps)(NavBar);
