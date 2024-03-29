import React, { useState } from 'react';
import Link from 'next/link';
import { List } from '@mui/material';
import { Header, Logo, DropDown, HumburgerIcon, Bars, MobileList } from '../../styles';

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

          <li className="dropDown" style={{ display: 'block' }}>
            Genres
            <DropDown className="items">
              <Link href="/action">Action</Link>
              <Link href="/thriller">Thriller</Link>
            </DropDown>
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
