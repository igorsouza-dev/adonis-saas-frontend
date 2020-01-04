import React from 'react';
import { useSelector } from 'react-redux';

import TeamSwitcher from 'components/TeamSwitcher';
import Projects from 'components/Projects';
import { Container } from './styles';

const Main = () => {
  const activeTeam = useSelector(state => state.team.activeTeam);
  return (
    <Container>
      <TeamSwitcher />
      <Projects team={activeTeam} />
    </Container>
  );
};
export default Main;
