// @flow
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import { <%= componentName %>Container } from '../<%= componentName %>Container';

describe('<%= componentName %>Container', () => {
  let tree, props;

  const buildTree = (newProps = {}) => {
    const defaultProps = {};

    props = Object.assign({}, defaultProps, newProps);

    return shallow(<<%= componentName %>Container {...props} />);
  };

  describe('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree();
      expect(tree).toMatchSnapshot();
    });
  });
});
