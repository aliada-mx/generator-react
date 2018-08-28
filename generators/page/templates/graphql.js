// @flow
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const <%= pageName %>Data = graphql(
  gql`
    query <%= pageName %>() {
    }
  `
);

export default compose(<%= pageName %>Data);
