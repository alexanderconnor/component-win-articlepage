import React from 'react';
import WorldInArticle from '.';
import article from './test/data/industry';
// There is also sample data for world-in-numbers within './test/data/'

export default (
  <WorldInArticle
    id={article.id}
    slug={article.attributes.slug}
    byline={article.attributes.byline}
    bylineLocation={article.attributes.byline_location}
    bio={article.attributes.bio}
    publishDate={article.publishDate}
    title={article.attributes.title}
    flytitle={article.attributes.flytitle}
    rubric={article.attributes.rubric}
    mainImage={article.attributes.mainimage}
    content={article.attributes.content}
    sectionName={article.attributes.section}
    variantName={article.attributes.variantName}
  />
);
