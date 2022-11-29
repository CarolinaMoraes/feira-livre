import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region CardBody
const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => (
  < StyledBody >
    {children}
  </StyledBody >
);

CardBody.defaultProps = {
  children: undefined
};

CardBody.propTypes = {
  children: PropTypes.node
};

//#endregion

//#region CardMedia
const StyledMedia = styled.div`
  display: flex;
  height: 270px;
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
`;

export const CardMedia = ({ image, children }) =>
  (<StyledMedia image={image}>{children}</StyledMedia>);

CardMedia.defaultProps = {
  image: undefined,
  children: undefined
};

CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
};

//#endregion

// #region CardMediaDescription
const StyledMediaDescription = styled.div`
  align-self: flex-end;
  flex: 1;
  background-color: rgba(0,0,0,0.4);
  padding: 8px;
  color: #fff;

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;

export const CardMediaDescription =
  ({ children }) => (<StyledMediaDescription>{children}</StyledMediaDescription>);

CardMediaDescription.defaultProps = {
  children: undefined
};

CardMediaDescription.propTypes = {
  children: PropTypes.node
};

// #endregion

//#region Card
const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
`;

const Card = ({ children }) => (
  <Root>
    <div />
    {children}
  </Root>
);

Card.defaultProps = {
  children: undefined
};

Card.propTypes = {
  children: PropTypes.node
};

//#endregion


export default Card;
