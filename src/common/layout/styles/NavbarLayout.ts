import styled from 'styled-components';
import Colors from '../../global/Color';

export const StyledNavbar = styled.nav`
  height: 50px;
  background-color: ${Colors.DarkBlue};
  display: flex;
  align-items: center;
  padding: 0 10em;
  
  ul{
    margin-left: 10px;
    display: flex;
    list-style:none
    margin:0 auto;
    padding-top: 15px;
  }

  li:not(:first-child){
    margin-left: 10px;
  }
  a{
    text-decoration: none;
  }
  
  a.navlink {
    color: ${Colors.White};
   
  }

  a.active {
    color: ${Colors.Orange};
    
    font-weight: 600 !important;
  }
  a.
`;

export const BrandTitle = styled.span`
  color: ${Colors.White};
  font-weight: 600;
`;
