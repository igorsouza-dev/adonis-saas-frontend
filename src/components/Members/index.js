import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Select from 'components/Select';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';

import Button from 'styles/components/Button';
import {
  closeModal,
  getMembersRequest,
  updateMemberRolesRequest,
  sendInvitationRequest,
} from 'store/modules/member/actions';
import api from 'services/api';
import { MembersList, Invite } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid e-mail')
    .required('The email of the user is required'),
});
function Members() {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);
  const members = useSelector(state => state.member.members);
  const loading = useSelector(state => state.member.loading);
  useEffect(() => {
    dispatch(getMembersRequest());
    async function getRoles() {
      try {
        const response = await api.get('roles');
        setRoles(response.data);
      } catch (e) {}
    }
    getRoles();
    // eslint-disable-next-line
  }, []);

  function handleModalMembers() {
    dispatch(closeModal());
  }

  function handleRoleChange(memberId, memberRoles) {
    dispatch(updateMemberRolesRequest(memberId, memberRoles));
  }
  function handleInvitation({ email }) {
    dispatch(sendInvitationRequest(email));
  }
  return (
    <Modal size="big">
      <h1>Members</h1>
      <Invite onSubmit={handleInvitation} schema={schema}>
        <Input
          type="email"
          placeholder="Insert the e-mail you wish to invite"
          name="email"
        />
        <Button type="submit">Send Invitation</Button>
      </Invite>
      <Form>
        {loading && <span>Loading...</span>}
        <MembersList>
          {members.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Select
                name="role"
                multiple
                value={member.roles}
                options={roles}
                getOptionValue={role => role.id}
                getOptionLabel={role => role.name}
                onChange={value => handleRoleChange(member.id, value)}
              />
            </li>
          ))}
        </MembersList>
        <Button onClick={handleModalMembers} filled={false} color="gray">
          Close
        </Button>
      </Form>
    </Modal>
  );
}

Members.propTypes = {};

Members.defaultProps = {};

export default Members;
