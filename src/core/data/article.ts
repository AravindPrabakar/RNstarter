import { Article } from '@src/core/model';
import {
  profile2,
  profile3,
  profile4,
  profile5,
} from './profile';
import { comments } from './comment';
import {
  imageArticle1Bg,
  imageArticle3Bg,
  imageArticle2Bg,
  imageArticle4Bg,
} from '@src/assets/images';

/* tslint:disable */

export const articles: Article[] = [
  {
    image: imageArticle1Bg,
    title: 'Ed Howard and Briony Turner Named Co-Presidents of Atlantic Records UK',
    description: 'Warner Music UK today announced that Briony Turner and Ed Howard have been promoted to Co-Presidents of Atlantic Records UK, effective from 1st January. Turner, who joined Atlantic in 2009, is upped from Co-Head of A&R for the label',
    content: 'Warner Music UK today announced that Briony Turner and Ed Howard have been promoted to Co-Presidents of Atlantic Records UK, effective from 1st January. Turner, who joined Atlantic in 2009, is upped from Co-Head of A&R for the label. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile2,
    date: 'Today 12:35 pm',
    tips: 10,
    comments: comments,
    likes: 320,
  },
  {
    image: imageArticle2Bg,
    title: 'DTA Records, a new label founded by Travis Barker',
    description: 'DTA Records, a new label founded by Travis Barker',
    content: 'DTA Records, a new label founded by Travis Barker. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile3,
    date: 'Today 12:35 pm',
    tips: 10,
    comments: [],
    likes: 320,
  },
  {
    image: imageArticle3Bg,
    title: 'Marie Fredriksson of the band Roxette has passed away',
    description: 'Marie first found fame as a solo artist before partnering with Per Gessle to form Roxette in 1986',
    content: 'Marie Fredriksson of the band Roxette has passed away following a 17-year long battle with cancer. Marie first found fame as a solo artist before partnering with Per Gessle to form Roxette in 1986. They quickly enjoyed success in their native. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile4,
    date: 'Today 11:10 am',
    tips: 5,
    comments: [comments[0], comments[1]],
    likes: 245,
  },
  {
    image: imageArticle4Bg,
    title: 'New Platform to Promote Recording Artists and Songwriters',
    description: 'New Platform to Promote Recording Artists and Songwriters Across the Globe   Warner Music Group (“WMG”) and Providence Equity Partners (“Providence”) today announced plans to invest in world-class recorded music and music publishing',
    content: 'New Platform to Promote Recording Artists and Songwriters Across the Globe   Warner Music Group (“WMG”) and Providence Equity Partners (“Providence”) today announced plans to invest in world-class recorded music and music publishingYes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile5,
    date: 'Today 11:10 am',
    tips: 5,
    comments: [comments[1], comments[2]],
    likes: 125,
  },
];
