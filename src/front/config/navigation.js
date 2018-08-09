// @flow

// #flow types
export type Link = {
  label: string,
  link: string,
  view?: string,
  isRouteBtn?: boolean,
};

export type Navigation = {
  brand: string,
  leftLinks: Array<Link>,
  rightLinks: Array<Link>,
};
// #endregion

const navigation = {
  brand: 'React Redux Bootstrap Starter',
  leftLinks: [],
  rightLinks: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Catalog',
      link: '/catalog',
      // view: 'protected',
      isRouteBtn: true,
    },
    {
      label: 'Protected',
      link: '/protected',
      view: 'protected',
      isRouteBtn: true,
    },
    {
      label: 'About',
      link: '/about',
      view: 'about',
      isRouteBtn: true,
    },
    {
      label: 'login',
      link: '/login',
      view: 'login',
      isRouteBtn: true,
    },
  ],
};

export default navigation;
