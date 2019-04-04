// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';

import withWrapper from '@src/utils/storybook/withWrapper';

import <%= componentName %> from '../';

storiesOf('<%= componentName %>', module)
  .addDecorator(withWrapper)
  .add('with ..', () => (<<%= componentName %> />));
