import { useRouter } from "next/router";

type Page = {
  name: PageName;
  display: string;
  href: string;
};

const pageNames = [
  "home",
  "register",
  "make_picks",
  "weekly_picks",
  "season",
  "profile",
] as const;
type PageName = typeof pageNames[number];

export const navOptions: Array<Page> = [
  { name: "register", display: "Register", href: "/register" },
  { name: "make_picks", display: "Make Your Picks", href: "/pick" },
  { name: "weekly_picks", display: "Weekly Picks", href: "/week" },
  { name: "season", display: "Season Standings", href: "/season" },
  {
    name: "profile",
    display: "Profile",
    href: "/profile",
  },
];

export const useSelectedNavOption = (): PageName | undefined => {
  const router = useRouter();
  return navOptions.find(({ href }) => router.pathname.startsWith(href))?.name;
};
