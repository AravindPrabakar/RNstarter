import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  MenuIconAuth,
  MenuIconArticles,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconSocial,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconArticlesDark,
  MenuIconMessagingDark,
  MenuIconDashboardsDark,
  MenuIconEcommerceDark,
} from '@src/assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [

  {
    title: 'Articles',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconArticles(style),
        'Eva Dark': MenuIconArticlesDark(style),
      }, theme);
    },
    route: 'Articles',
  },

  {
    title: 'Ecommerce',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconEcommerce(style),
        'Eva Dark': MenuIconEcommerceDark(style),
      }, theme);
    },
    route: 'Ecommerce',
  }
];
