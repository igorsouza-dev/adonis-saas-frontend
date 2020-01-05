import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Can from 'components/Can';
import Button from 'styles/components/Button';
import Members from 'components/Members';
import { getProjectsRequest, openModal, closeModal, createProjectRequest } from 'store/modules/project/actions';
import { openModal as openModalMembers, closeModal as closeModalMembers } from 'store/modules/member/actions';
import { Container, Project } from './styles';

const schemaProject = Yup.object().shape({
  title: Yup.string().required('The name of the project is required'),
});
function Projects({ team }) {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.project.projects);
  const projectModalOpen = useSelector(state => state.project.projectModalOpen);
  const memberModalOpen = useSelector(state => state.member.memberModalOpen);
  const loading = useSelector(state => state.project.loading);

  useEffect(() => {
    dispatch(getProjectsRequest());
    // eslint-disable-next-line
  }, [team]);

  function handleNewProject() {
    if (projectModalOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  }
  function handleModalMembers() {
    if (memberModalOpen) {
      dispatch(closeModalMembers());
    } else {
      dispatch(openModalMembers());
    }
  }

  function handleSubmitProject({ title }) {
    dispatch(createProjectRequest(title));
  }

  if (!team) return null;
  return (
    <Container>
      <header>
        {!team && (
          <h1>Select a team on the sidebar</h1>
        )}
        <h1>{team.name}</h1>
        <div>
          <Can checkPermission="projects_create">
            <Button onClick={handleNewProject}>+ New</Button>
          </Can>
          <Button onClick={handleModalMembers}>Members</Button>
        </div>
      </header>
      {loading && <h1>Loading...</h1>}
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
      {memberModalOpen && (
        <Members />
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
