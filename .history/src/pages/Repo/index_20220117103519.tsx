import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepoInfo } from './styles';
import logo from '../../assets/logo.svg'
import { FiChevronLeft } from 'react-icons/fi'

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt='GitCollection' />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepoInfo>
        <header>
          <img src="" alt="img do repositório" />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>número</strong>
            <span>Starts</span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </RepoInfo>
    </>
  )
}