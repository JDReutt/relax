import React from 'react';
import {Component, mergeFragments} from 'relax-framework';

import PageBuilderContainer from '../../../../containers/page-builder';

export default class PageBuild extends Component {
  static fragments = mergeFragments({
    page: {
      _id: 1,
      state: 1
    },
    tab: {
      _id: {
        _id: 1,
        _userId: 1
      },
      page: {
        _id: 1,
        title: 1
      }
    }
  }, PageBuilderContainer.fragments)

  render () {
    return (
      <PageBuilderContainer {...this.props} />
    );
  }
}
