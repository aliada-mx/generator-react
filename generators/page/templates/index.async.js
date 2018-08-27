// @flow
import Loadable from '@src/components/Loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "<%= pageName %>" */ './index.js'),
});
