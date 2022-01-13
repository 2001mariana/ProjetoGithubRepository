import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { Form, Repos, Title } from './styles';

interface GithubRepository {
  
}

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
      <a href='/repositories'>
        <img src='https://camo.githubusercontent.com/ac48b7a30c399f5ac647809c78547c5cd084a6b0ffdc28c59ffd5f19da61db0f/68747470733a2f2f616c75697a696f646576656c6f7065722e636f6d2e62722f6173736574732f696d672f69636f6e2e706e67' alt='Repositorio' />
        <div>
          <strong>aluiziodevelopr/mini-curso-reactjs</strong>
          <p>Repositório do mini curso gratuito de react</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repos>
    </>
  )
}