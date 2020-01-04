import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'styles/components/Button';
import { getProjectsRequest } from 'store/modules/project/actions';
import { Container, Project } from './styles';

function Projects({ team }) {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.project.projects);
  useEffect(() => {
    dispatch(getProjectsRequest());
  }, [team]);

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
      {projects.map(project => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}
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
