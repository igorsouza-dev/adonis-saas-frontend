import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Button from 'styles/components/Button';
import { getProjectsRequest, openModal, closeModal, createProjectRequest } from 'store/modules/project/actions';
import { Container, Project } from './styles';

const schemaProject = Yup.object().shape({
  title: Yup.string().required('The name of the project is required'),
});
function Projects({ team }) {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.project.projects);
  const projectModalOpen = useSelector(state => state.project.projectModalOpen);

  useEffect(() => {
    dispatch(getProjectsRequest());
  }, [team]);

  function handleNewProject() {
    if (projectModalOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  }

  function handleSubmitProject({ title }) {
    dispatch(createProjectRequest(title));
  }

  if (!team) return null;
  return (
    <Container>
      <header>
        <h1>{team.name}</h1>
        <div>
          <Button onClick={handleNewProject}>+ New</Button>
          <Button onClick={() => {}}>Members</Button>
        </div>
      </header>
      {projects.map(project => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}
      {projectModalOpen && (
          <Modal>
            <h1>New Project</h1>
            <Form onSubmit={handleSubmitProject} schema={schemaProject}>
              <span>NAME</span>
              <Input type="text" name="title" />
              <Button size="big" type="submit">
                SAVE
              </Button>
              <Button size="small" color="gray" onClick={(handleNewProject)}>
                CLOSE
              </Button>
            </Form>
          </Modal>
        )}
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
