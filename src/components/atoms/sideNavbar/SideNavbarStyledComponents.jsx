import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8vh;
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
  img {
    width: 4rem;
    max-width: 90%;
    height: auto;
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavbarItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  border-radius: 30%;
  transition: all 0.2s ease-in-out;
  &:hover { background-color: rgb(21, 12, 86);
  transform: scale(1.5);
  }
  

  img {
    width: 2rem;
    height: 2rem;
    max-width: 80%;
    max-height: 80%;
  }
`;

export const LastItem = styled(NavbarItem)`
  margin-top: 3.5rem;
  img {
    width: 2rem;
    height: 2rem;
    max-width: 80%;
    max-height: 80%;
  }
`;

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`
export const Rotate = styled.img`
    animation: ${rotate} 7s infinite;
    animation-timing-function: linear;
`;

export const NavbarIcon = styled.img`
  transition: all 0.2s ease-in-out;
  &:hover {
    img{
      visibility: hidden
    }
  }
`;