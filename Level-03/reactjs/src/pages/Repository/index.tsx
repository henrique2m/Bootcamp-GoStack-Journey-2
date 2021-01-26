import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt=" logo " />

        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/53455458?s=460&u=edc2d0cec8d5e617144fab573cae142cae4449a2&v=4"
            alt="Henrique"
          />
          <div>
            <strong>Henrique</strong>
            <p>Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1034</strong>
            <span>STARS</span>
          </li>
          <li>
            <strong>1034</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1034</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/" key="">
          <div>
            <strong> </strong>
            <p />
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
