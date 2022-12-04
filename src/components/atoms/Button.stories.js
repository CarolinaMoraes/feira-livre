import React from 'react'
import Button from './Button';
import styled from 'styled-components';

import { actions } from "@storybook/addon-actions";

export default {
  title: "Components/Atoms/Button",
  component: Button
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button {...props} {...events} color='primary'>
        Primary
      </Button>
      <Button {...props}  {...events} color='danger'>
        Danger
      </Button>
    </Toolbar>
    <p>As a link</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button as="a" href="#" {...props} {...events} color='primary'>
        Primary
      </Button>
      <Button as="a" href="#" {...props}  {...events} color='danger'>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled</p>
    <Toolbar>
      <Button {...props} {...events} disabled>
        Default
      </Button>
      <Button {...props} {...events} disabled color='primary'>
        Primary
      </Button>
      <Button {...props}  {...events} disabled color='danger'>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;

