import React from 'react';
import { StyledNavbar, BrandTitle } from './styles/NavbarLayout';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About', href: '/about' },
  { name: 'Forms', href: '/forms' },
  { name: 'Datatable', href: '/react-datatable' },
  { name: 'Reducer', href: '/reducer' },
  { name: 'Example', href: '/counter-component' },
  { name: 'Redux', href: '/counter-component-redux' },
  { name: 'ListView', href: '/listview' },
  { name: 'Infinite Scroll', href: '/infinite-scroll' },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to={'/'} className='brand-title'>
        <BrandTitle>RABS Pro</BrandTitle>
      </NavLink>
      <ul>
        {navigation.map(({ name, href }, index) => {
          return (
            <li key={index}>
              <NavLink
                to={href}
                className={({ isActive }) => {
                  return 'navlink ' + (isActive ? 'active' : '');
                }}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
