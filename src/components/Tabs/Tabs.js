import React, { Component } from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import info from '../../images/Tabs/info.svg';
import Tab from '../Tab/Tab';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: null
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(id) {
    this.setState({
      selectedTab: id
    });
  }

  renderTabsList() {
    const tabsList = this.props.tabs.map(function(item, index) {
      return (
        <Tab
          key={'tab-id-' + index}
          id={item.id}
          title={item.title}
          handler={this.selectTab}
        />
      );
    }, this);

    return tabsList;
  }

  renderInfoList() {
    const infoList = this.props.info.map(function(item, index) {
      return (
        <p
          key={'tabs_info-id-' + index}
        >
          <span>{item.title + ' - '}</span>
          {item.description}
        </p>
      );
    });

    return infoList;
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs__head">
          <div className="tabs__title">{this.props.title}</div>
          <div className="tabs__info">
            <img src={info} alt="Информация" aria-hidden="true" />
            <div className="tabs__info-text">
              { this.renderInfoList() }
            </div>
          </div>
        </div>
        <div className="tabs__body">
          { this.renderTabsList() }
        </div>
        <div className="tabs__sub-info">{this.props.subInfo}</div>
      </div>
    );
  }

}

Tabs.propTypes = {
  title: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  info: PropTypes.array.isRequired,
  subInfo: PropTypes.string.isRequired
};

export default Tabs;