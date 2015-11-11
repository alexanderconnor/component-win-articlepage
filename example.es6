import React from 'react';
import WorldInArticle from '.';
import article from './test/data/article';

export default (
  <WorldInArticle
    id={article.id}
    slug={article.attributes.slug}
    byline={article.attributes.byline}
    bylineLocation={article.attributes.byline_location}
    publishDate={article.publishDate}
    title={article.attributes.title}
    flytitle={article.attributes.flytitle}
    rubric={article.attributes.rubric}
    mainImage={{
      src: article.attributes.mainimage,
      alt: article.attributes.imagealt,
    }}
    content={article.attributes.content}
    sectionName={article.attributes.section}
  />
);
