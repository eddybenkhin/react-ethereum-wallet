import React, { Component } from 'react';
import SU from './selectableUnit.js';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

export const HeaderField = ({ field }) => {
  return (
    <li className={field.liClass}>
      <Link to={field.href}>
        <i className={field.icon} />
        <span>{field.displayText}</span>
      </Link>
    </li>
  );
};

export class NetworkHeader extends Component {

  render() {

    console.log("in NetworkHeader",this.props)
    let properties = this.props.properties
    let field = this.props.field
    let peerCount, blockHeader, timeSinceLastBlock

    properties.peerCount === undefined ? peerCount = 'Connecting...' : peerCount =  properties.peerCount

    // // let timeSinceLastBlock = properties.timeSinceLastBlock
    // // 'Waitin for blocks...'
    // // let blockHeader = properties.reducers.blockHeader

    properties.blockHeader === undefined ? blockHeader = '--' : blockHeader =  properties.blockHeader

    console.log(peerCount, timeSinceLastBlock, blockHeader)


    return (
      <li className={field.liClass}>
        <i className={field.firstIcon} />
         {/*{ peerCount } */}
        <span> {field.firstText} </span>
        <i className={field.secondIcon} />
        {/* { blockHeader } */}
        <span className={field.secondClass}>{field.secondText}</span>
      </li>    
    );
  }
};

export class BalanceHeader extends Component {
  render() {
    const field = this.props.field;
    let currency = this.props.properties.currency;
    let totalBalance = this.props.properties.totalBalance;
    return (
      <li className={field.liClass}>
        <h3>{field.firstText}</h3>
        <span className={field.firstClass}>
          { totalBalance }
          <span className="inline-form" name="unit">
            <button type="button" data-name="unit" data-value="ether">
              { currency }
            </button>
            <div className="simple-modal">
              <SU />
            </div>
          </span>
        </span>
      </li>
    );
  } 
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NetworkHeader);

