import React, {Component} from 'react';

/**
 * @class <%= name %>
 * @description Brief description
 */
class <%= name %> extends Component {
  
  state = {}
  static propTypes = {}
  
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}

  render() {
    return (
      <h2><%= name %></h2>
    );
  }
}

<%= name %>.displayName = <%= name %>;
export default <%= name %>;