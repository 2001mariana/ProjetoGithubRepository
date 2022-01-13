import { FormatInputPathObject } from 'path';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { Form, Repos, Title } from './styles';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepository[]>([])
  const [newRepo, setNewRepo] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value)
  }

  async function handleAddRepo(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get<GithubRepository>(`repos/${newRepo}`)
    const repository = response.data
    setRepos([...repos, repository])//utilizei ...repos para manter tudo que já existe na lista repos e adicionando repository. Caso eu alterasse o estado passando apenas repository eu estaria substituindo tudo que tem no estado por repository
    setNewRepo('')//aqui eu estou "zerando" o input pois já pesquisei o que fora digitado
  }
  return (
    <>
    <img src={logo} alt="GitCollection" />
    <Title>
      Catálogo de repositórios do Github
    </Title>

    <Form onSubmit={handleAddRepo}>
      <input placeholder="username/repository_name" onChange={handleInputChange} />
      <button type="submit">Buscar</button>
    </Form>

    <Repos>
      {repos.map(repository => (
        <a href='/repositories' key={repository.full_name}>
        <img src= alt='Repositorio' />
        <div>
          <strong>aluiziodevelopr/mini-curso-reactjs</strong>
          <p>Repositório do mini curso gratuito de react</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      ))}
    </Repos>
    </>
  )
}