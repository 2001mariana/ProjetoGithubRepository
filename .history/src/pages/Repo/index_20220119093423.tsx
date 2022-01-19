import React, { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link, useRouteMatch } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import { api } from '../../services/api'
import { Header, Issues, RepoInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

interface GithubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

export const Repo: React.FC = () => {
  const [  ]
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => console.log(response.data))
    api.get(`repos/${params.repository}/issues`).then(response => console.log(response.data))
  }, [params.repository])

  return (
    <>
    <h1>Repo: {params.repository}</h1>
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