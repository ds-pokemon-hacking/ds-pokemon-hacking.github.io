import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NavbarSearch from '@theme-original/Navbar/Search';

export default function NavbarSearchWrapper(props) {
  const {pathname} = useLocation();
  const homePath = useBaseUrl('/');

  // The homepage renders its search in the banner instead of the navbar.
  if (pathname === homePath) {
    return null;
  }

  return <NavbarSearch {...props} />;
}
