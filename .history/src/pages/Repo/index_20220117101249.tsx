import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';
import logo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } 
  return (
    <>
      <Header>
        <img src={logo} alt='GitCollection' />
        <Link to="/">Voltar</Link>
      </Header>
    </>
  )
}