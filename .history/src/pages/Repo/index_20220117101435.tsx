import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header } from './styles';
import logo from '../../assets/logo.svg'
import {} from 'react-icons'

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt='GitCollection' />
        <Link to="/">Voltar</Link>
      </Header>
    </>
  )
}