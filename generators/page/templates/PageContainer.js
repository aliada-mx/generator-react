// @flow
import React from 'react';
<% if (hasGraphql) { %>import compose from 'lodash/flowRight';
import { withRouter } from 'react-router-dom';

import graphql from './graphql';<% } %>
import <%= pageName %> from './<%= pageName %>';

type <%= pageName %>ContainerProps = {
  className?: string,
};

class <%= pageName %>Container extends React.Component<
  <%= pageName %>ContainerProps
> {
  render() {
    return <<%= pageName %> {...this.props} />;
  }
}
<% if (hasGraphql) { %>
export default compose(withRouter, graphql)(<%= pageName %>Container);
<% } else { %>
export default <%= pageName %>Container;<% } %>
