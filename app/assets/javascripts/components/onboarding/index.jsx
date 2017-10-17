import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/CSSTransitionGroup';

const getReturnToParam = function () {
  const returnTo = window.location.search.match(/return_to=([^&]*)/);
  return (returnTo && returnTo[1]) || '/';
};

const getCurrentUser = () => $('#react_root').data('current_user');
const getEmailable = () => $('#react_root').data('emailable');

// Router root
const Root = createReactClass({
  propTypes: {
    children: PropTypes.object,
    location: PropTypes.object
  },

  render() {
    return (
      <div className="container">
        <TransitionGroup
          transitionName="fade"
          component="div"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            returnToParam: getReturnToParam(),
            currentUser: getCurrentUser(),
            emailable: getEmailable()
          })}
        </TransitionGroup>
      </div>
    );
  }
});

export default Root;
