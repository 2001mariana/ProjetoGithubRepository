import React from 'react';

import { Title } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logo} alt= />
    <Title>
      Dashboard!
    </Title>
    </>
  )
}