import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 9%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const NavbarBrand = styled.div`
  margin-bottom: 2rem;
`;

export const NavbarItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavbarItem = styled.div`
  margin-bottom: 1rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;