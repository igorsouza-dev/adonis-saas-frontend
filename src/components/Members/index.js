import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';

import Button from 'styles/components/Button';
import { closeModal, getMembersRequest } from 'store/modules/member/actions';
import { MembersList } from './styles';

function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.member.members);

  useEffect(() => {
    dispatch(getMembersRequest());
  }, []);

  function handleModalMembers() {
    dispatch(closeModal());
  }

  return (
    <Modal size="big">
      <h1>Members</h1>
      <form>
        <MembersList>
          {members.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
            </li>
          ))}
        </MembersList>
        <Button onClick={handleModalMembers} filled={false} color="gray">
          Cancel
        </Button>
      </form>
    </Modal>
  );
}

Members.propTypes = {};

Members.defaultProps = {};

export default Members;
