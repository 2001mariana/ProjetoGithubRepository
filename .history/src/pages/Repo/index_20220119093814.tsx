import React, { useEffect, useState } from 'react';
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
  const [ Repository, setRepository ] = useState<GithubRepository | null>(null)
  const [ RepositoryIssues, setIssues ] = useState<GithubIssue[]>([])
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => setRepository(response.data))
    api.get(`repos/${params.repository}/issues`).then(response => setIssues(response.data))
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
      { }
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