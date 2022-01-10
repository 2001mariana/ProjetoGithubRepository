import React from 'react';

import {  }

import logo from '../../assets/logo.svg';
import { Form, Repos, Title } from './styles';

import
import

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
      <a href='/repositories' />
        <img src='' alt='Repositorio' />
        <div>
          <strong>aluiziodevelopr/mini-curso-reactjs</strong>
          <p>Repositório do mini curso gratuito de react</p>
        </div>
    </Repos>
    </>
  )
}