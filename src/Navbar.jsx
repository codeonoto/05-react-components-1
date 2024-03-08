import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: space-between;
`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <div>Title</div>
          <div style={cartStyles.cartContainer}>
            <img
              style={cartStyles.cartIcon}
              src='https://cdn-icons-png.flaticon.com/128/9219/9219671.png'
              alt='cartItem'
            />
            <span style={cartStyles.cartCount}>0</span>
          </div>
        </Nav>
      </>
    );
  }
}

const cartStyles = {
  cartContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  cartIcon: {
    height: 48,
    marginRadious: 20,
  },
  cartCount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
};

export default Navbar;
