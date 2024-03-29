import {useRouter} from 'next/router';

type Page = {
  name: PageName;
  display: string;
  href: string;
};

const pageNames = [
  'home',
  'register',
  'make_picks',
  'weekly_picks',
  'season',
  'profile',
  'league',
  'superbowl',
] as const;
type PageName = typeof pageNames[number];

export const navOptions: Array<Page> = [
  {name: 'home', display: 'Home', href: '/'},
  // turning this off at the end of 2022 season, it error'd so figured I'd just remove the option
  // { name: "make_picks", display: "Make Your Picks", href: "/pick" },
  // {name: 'weekly_picks', display: 'Weekly Picks', href: '/week'},
  // {name: 'season', display: 'Season Standings', href: '/standings'},
  // {name: 'superbowl', display: 'Super Bowl Picks', href: '/superbowl'},
  // { name: "profile", display: "Profile", href: "/profile/263", },
  // { name: "league", display: "League", href: "/league", },
];

export const useSelectedNavOption = (): PageName | undefined => {
  const router = useRouter();
  if (router.pathname === '/') {
    return 'home';
  }
  return navOptions
    .filter(({href}) => href !== '/')
    .find(({href}) => router.pathname.startsWith(href))?.name;
};
