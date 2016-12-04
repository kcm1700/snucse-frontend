import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {UserLevel} from '../../utils';
import TagCloud from '../TagCloud';
import FollowingProfileList from './FollowingProfileList';

const SideMenu = React.createClass({
  regularSideMenu() {
    return (
      <div className="side-menu">
        <h1>User Info</h1>
        <Link to="/profiles">전체그룹</Link>
        <ul>
          <li className="my-profiles">팔로우 중인 그룹</li>
          <FollowingProfileList/>
        </ul>
        <TagCloud/>
      </div>
    );
  },

  defaultSideMenu() {
    return (
      <div className="side-menu">
        <h1>User Info</h1>
      </div>
    );
  },

  render() {
    const mapUserLevelToRenderer = {
      [UserLevel.REGULAR]: this.regularSideMenu,
      default: this.defaultSideMenu
    };

    return UserLevel.getRenderer(mapUserLevelToRenderer, this.props.userLevel)();
  }
});

function mapStateToProps(state) {
  return {
    userLevel: state.userInfo.userLevel
  };
}

export default connect(mapStateToProps)(SideMenu);
