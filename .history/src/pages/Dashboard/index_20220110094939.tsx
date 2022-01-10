import React from 'react';

import logo from '../../assets/logo.svg';
import { Form, Repos, Title } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logo} alt="GitCollection" />
    <Title>
      Catálogo de repositórios do Github
    </Title>

    <Form>
      <input placeholder="username/repository_name" />
      <button type="submit">Buscar</button>
    </Form>

    <Repos>
      
    </Repos>
    </>
  )
}