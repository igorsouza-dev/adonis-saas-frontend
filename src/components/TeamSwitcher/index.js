import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import {
  getTeamsRequest,
  selectTeam,
  openModal,
  closeModal,
  createTeamRequest,
} from 'store/modules/team/actions';

import { signOut } from 'store/modules/auth/actions';
import Modal from 'components/Modal';
import Button from 'styles/components/Button';
import { Container, TeamList, Team, NewTeam, Logout } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('The name of the team is required'),
});

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.team.teams);
  const currentTeam = useSelector(state => state.team.activeTeam);
  const teamModalOpen = useSelector(state => state.team.teamModalOpen);

  useEffect(() => {
    dispatch(getTeamsRequest());
    // eslint-disable-next-line
  }, []);

  function handleSelectTeam(team) {
    dispatch(selectTeam(team));
  }
  function handleNewTeam() {
    if (teamModalOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  }
  function handleSubmit({ name }) {
    dispatch(createTeamRequest(name));
  }
  function handleSignOut() {
    dispatch(signOut());
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
        <NewTeam onClick={handleNewTeam}>New</NewTeam>
        {teamModalOpen && (
          <Modal>
            <h1>New Team</h1>
            <Form onSubmit={handleSubmit} schema={schema}>
              <span>NAME</span>
              <Input type="text" name="name" />
              <Button size="big" type="submit">
                SAVE
              </Button>
              <Button size="small" color="gray" onClick={handleNewTeam}>
                CLOSE
              </Button>
            </Form>
          </Modal>
        )}
      </TeamList>
      <Logout onClick={handleSignOut}>LOGOUT</Logout>
    </Container>
  );
}
