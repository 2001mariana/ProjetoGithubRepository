import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';
import logo from '../../assets/logo.svg'

interface Repositor

export const Repo: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logo} alt='GitCollection' />
        <Link to="/">Voltar</Link>
      </Header>
    </>
  )
}