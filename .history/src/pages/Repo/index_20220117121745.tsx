import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, Issues, RepoInfo } from './styles';
import logo from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { api } from '../../services/api'

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect((
    api.get(`repos/${params.repository}`).then(response => console.log(the))
  ) => {}, [])

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
            <span>Stars</span>
          </li>
          <li>
            <strong>número</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>número</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>Título da issue</strong>
            <p>Descrição da Issues</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}