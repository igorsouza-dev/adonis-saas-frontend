import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeamsRequest, selectTeam } from 'store/modules/team/actions';

import { Container, TeamList, Team } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.team.teams);
  const currentTeam = useSelector(state => state.team.activeTeam);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, []);

  function handleSelectTeam(team) {
    dispatch(selectTeam(team));
  }

  return (
    <Container>
      <TeamList>
        {teams.map(team => (
          <Team
            key={team.id}
            selected={currentTeam && currentTeam.id === team.id}
            onClick={() => handleSelectTeam(team)}
          >
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}
