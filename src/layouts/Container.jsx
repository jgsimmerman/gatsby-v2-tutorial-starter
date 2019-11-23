import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/* ****************************
 * Adding the following to Wrapper fixes catalog pages and messes up ItemContent/Item pages.
 * 
      flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
      max-width: calc(99.9% * 1 / 3 - 2.5rem);
      width: calc(99.9% * 1 / 3 - 2.5rem);
 * 
 *****************************************************/

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 1.5rem;
  width: 60%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;

  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`;

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
