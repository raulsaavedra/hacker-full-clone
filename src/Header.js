import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
const Logo = styled.a.attrs({
  className: 'f1 fw8 no-underline white pt3',
})``;
const Description = styled.p.attrs({
  className: 'f3 fw8 white'
})``
const StyledContainer = styled(Container).attrs({
  className: 'bg-black-70 db'
})`
`;
const Header = () => {
  return (
    <StyledContainer className="">
      <Logo className="flex justify-start-l justify-center-m justify-center" to="/">
        HN Feed
      </Logo>
      <Description className="flex justify-start-l justify-center-m justify-center mb0 mt3 pb3">
        We love hacker news! 
      </Description>
    </StyledContainer>
  );
};

export default Header;