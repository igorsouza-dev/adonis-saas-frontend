import React from 'react';
import PropTypes from 'prop-types';
import Button from 'styles/components/Button';
import { Container, Project } from './styles';

function Projects({ team }) {
  if (!team) return null;
  return (
    <Container>
      <header>
        <h1>{team.name}</h1>
        <div>
          <Button onClick={() => {}}>+ New</Button>
          <Button onClick={() => {}}>Members</Button>
        </div>
      </header>
      <Project>
        <p>Title</p>
      </Project>
      <Project>
        <p>Title</p>
      </Project>
      <Project>
        <p>Title</p>
      </Project>
      <Project>
        <p>Title</p>
      </Project>
      <Project>
        <p>Title</p>
      </Project>
    </Container>
  );
}
Projects.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string,
  }),
};
Projects.defaultProps = {
  team: null,
};
export default Projects;
