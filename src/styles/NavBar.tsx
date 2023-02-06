import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 20px;
  background-color: #1d1f1d;
  height: 50px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    nav {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  a {
    color: #09c372;
  }
`;

export const List = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    color: white;
  }
  li {
    padding: 5px;
    margin-left: 10px;
  }
  li:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const MobileList = styled.ul`
  list-style: none;
  align-items: center;
  justify-content: space-around;
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  height: calc(100vh - 50px);
  width: 100%;
`;

export const Bars = styled.div`
  width: 35px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
`;

export const HumburgerIcon = styled.div`
  margin: auto 0;
  display: none;
  cursor: pointer;

  &.open {
    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-6px, 6px);
      transform: rotate(-45deg) translate(-6px, 6px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      -webkit-transform: rotate(45deg) translate(-6px, -8px);
      transform: rotate(45deg) translate(-6px, -8px);
    }
    .mobileMenu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .mobileMenu li {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
