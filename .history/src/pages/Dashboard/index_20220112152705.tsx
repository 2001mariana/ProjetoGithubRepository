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
    console.log()
    //setRepos([...repos, repository])//utilizei ...repos para manter tudo que já existe na lista repos e adicionando repository. Caso eu alterasse o estado passando apenas repository eu estaria substituindo tudo que tem no estado por repository
    //setNewRepo('')//aqui eu estou "zerando" o input pois já pesquisei o que fora digitado
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