import React, { Component } from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import info from '../../images/Tabs/info.svg';
import Tab from '../Tab/Tab';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: null,
      error: false
    };

    this.inputField = React.createRef();

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(id) {
    this.setState({
      selectedTab: id,
      error: false
    });
  }

  renderTabsList() {
    const tabsList = this.props.tabs.map(function(item, index) {
      return (
        <Tab
          key={'tab-id-' + index}
          id={item.id}
          title={item.title}
          name={this.props.name}
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

  errorTabsClass() {
    if (this.state.error === true) {
      return " tabs__body--error";
    } else {
      return "";
    }
  }

  validate() {
    if (this.state.selectedTab === null) {

      this.setState({
        error: true
      });

      return {
        id: this.props.name,
        error: true,
        value: this.state.selectedTab
      };

    } else {
      return {
        id: this.props.name,
        error: false,
        value: this.state.selectedTab
      };
    }

  }

  render() {
    return (
      <div className="tabs" ref={this.inputField}>
        <div className="tabs__head">
          <div className="tabs__title">{this.props.title}</div>
          <div className="tabs__info">
            <img src={info} alt="Информация" aria-hidden="true" />
            <div className="tabs__info-text">
              { this.renderInfoList() }
            </div>
          </div>
        </div>
        <div className={ 'tabs__body' + this.errorTabsClass() }>
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