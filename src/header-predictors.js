import ArticleHeaderContainer, { ImageContainer } from '@economist/component-articletemplate/lib/header';
import Picture from '@economist/component-picture';
import React from 'react';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedHeaderItemClasses = [
  'gutter-l',
];
export default function WinPredictorsHeader({
  generateClassNameList = defaultGenerateClassNameList,
  mainImage,
  flytitle,
  title,
  rubric,
}) {
  let flytitleEl = null;
  let titleEl = null;
  let rubricEl = null;
  let mainImageEl = null;
  if (flytitle) {
    flytitleEl = (
      <h1
        itemProp="headline"
        className={[
          ...generateClassNameList('article-template__flytitle'),
          ...extendedHeaderItemClasses,
        ].join(' ')}
      >
        {flytitle}
      </h1>
    );
  }
  if (title) {
    titleEl = (
      <h1
        itemProp="alternativeHeadline"
        className={[
          ...generateClassNameList('article-template__title'),
          ...extendedHeaderItemClasses,
        ].join(' ')}
      >
        {title}
      </h1>
    );
  }
  if (rubric) {
    rubricEl = (
      <h3
        itemProp="rubric"
        className={[
          ...generateClassNameList('article-template__rubric'),
          ...extendedHeaderItemClasses,
        ].join(' ')}
      >
        {rubric}
      </h3>
    );
  }
  if (mainImage) {
    mainImageEl = (
      <ImageContainer generateClassNameList={generateClassNameList}>
        <Picture
          className={generateClassNameList('article-template__image').join(' ')}
          itemProp="image"
          {...mainImage}
        />
      </ImageContainer>
    );
  }

  return (
    <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
      {flytitleEl}
      {titleEl}
      {rubricEl}
      {mainImageEl}
    </ArticleHeaderContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  WinPredictorsHeader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    mainImage: React.PropTypes.shape(Picture.propTypes || {}),
    flytitle: React.PropTypes.string,
    title: React.PropTypes.string,
    rubric: React.PropTypes.string,
  };
}
