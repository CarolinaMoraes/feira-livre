import React from 'react'
import Button from './Button';
import styled from 'styled-components';

import { actions } from "@storybook/addon-actions";

export default {
  title: "Components / Button",
  component: Button
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button {...events}>
        Default
      </Button>
      <Button {...events} color='primary'>
        Primary
      </Button>
      <Button  {...events} color='danger'>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled</p>
    <Toolbar>
      <Button {...events} disabled>
        Default
      </Button>
      <Button {...events} disabled color='primary'>
        Primary
      </Button>
      <Button  {...events} disabled color='danger'>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button variant='outlined' {...events}>
        Default
      </Button>
      <Button variant='outlined' {...events} color='primary'>
        Primary
      </Button>
      <Button variant='outlined'  {...events} color='danger'>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled</p>
    <Toolbar>
      <Button variant='outlined' {...events} disabled>
        Default
      </Button>
      <Button variant='outlined' {...events} disabled color='primary'>
        Primary
      </Button>
      <Button variant='outlined'  {...events} disabled color='danger'>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button variant='link' {...events}>
        Default
      </Button>
      <Button variant='link' {...events} color='primary'>
        Primary
      </Button>
      <Button variant='link'  {...events} color='danger'>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled</p>
    <Toolbar>
      <Button variant='link' {...events} disabled>
        Default
      </Button>
      <Button variant='link' {...events} disabled color='primary'>
        Primary
      </Button>
      <Button variant='link'  {...events} disabled color='danger'>
        Danger
      </Button>
    </Toolbar>
  </div>
);

