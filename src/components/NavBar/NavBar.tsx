import Link from 'next/link';
import React, { useState } from 'react';
import { Bars, Header, HumburgerIcon, List, Logo, MobileList } from '../../styles/NavBar';

const NavBar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <Header>
      <Logo>
        <Link href="/">PlayStation Store</Link>
      </Logo>
      <nav>
        <List>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/card">Backet</Link>
          </li>
        </List>
      </nav>
      <HumburgerIcon className={isActive ? 'open' : 'close'} onClick={handleToggle}>
        <Bars className="bar1"></Bars>
        <Bars className="bar2"></Bars>
        <Bars className="bar3"></Bars>
        <MobileList className="mobileMenu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/card">Backet</Link>
          </li>
        </MobileList>
      </HumburgerIcon>
    </Header>
  );
};

export default NavBar;
