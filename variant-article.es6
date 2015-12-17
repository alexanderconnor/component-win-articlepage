/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import createVariantSwitcher from '@economist/component-variantify';

import { WinHeader, WinPredictorsHeader, WinNumbersHeader } from './header';
import { WinSubheader, WinLeaderSubheader, WinNumbersSubheader } from './subheader';
import {
  StandardArticleBody as StandardWinArticleBody,
  WorldInNumbersArticleBody as WorldInNumbersWinArticleBody,
} from './body';
import { WinFooter } from './footer';
import CallToAction from './cta';

const config = {
  defaultVariant: 'world-in-main',
  variants: {
    'world-in-main': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-portrait': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-leader': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinLeaderSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-predictors': {
      ArticleHeader: WinPredictorsHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-numbers': {
      ArticleHeader: WinNumbersHeader,
      ArticleSubheader: WinNumbersSubheader,
      ArticleBody: WorldInNumbersWinArticleBody,
      ArticleFooter: CallToAction,
    },
  },
};
export default createVariantSwitcher(config)(ArticleTemplate);
