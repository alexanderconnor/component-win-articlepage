/* eslint react/no-multi-comp: 0 */
import React, { Component, PropTypes } from 'react';
import { ArticleFooterContainer } from '@economist/component-articletemplate/footer';
import { defaultGenerateClassNameList } from '@economist/component-variantify';
import CallToAction from './cta';

const extendedFooterBylineClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
const extendedFooterBylineDetailsClasses = [
  'gutter-l',
  'col-10',
];
function BylineFooterContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <div className={[
      ...generateClassNameList(`ArticleTemplate--byline-footer`),
      ...extendedFooterBylineClasses,
    ].join(' ')}
    >
      {children}
    </div>
  );
}
BylineFooterContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export class WinFooter extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      byline: PropTypes.string,
      bylineLocation: PropTypes.string,
      bio: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, byline, bylineLocation, bio } = this.props;
    function element(content, klass, extededClasses) {
      let html = null;
      if (content) {
        html = (
          <span
            className={[
              ...generateClassNameList(klass),
              ...extededClasses,
            ].join(' ')}
            dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
              '__html': content,
            }}
          />
        );
      }

      return html;
    }

    return (
      <div>
        <ArticleFooterContainer generateClassNameList={generateClassNameList}>
          <BylineFooterContainer generateClassNameList={generateClassNameList}>
            {element(byline, 'ArticleTemplate--byline', extendedFooterBylineClasses)}
            {element(bylineLocation, 'ArticleTemplate--byline-location', extendedFooterBylineDetailsClasses)}
            {element(bio, 'ArticleTemplate--byline-bio')}
          </BylineFooterContainer>
        </ArticleFooterContainer>
        <CallToAction {...this.props} />
      </div>
    );
  }

}
