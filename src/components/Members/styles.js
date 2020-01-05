import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const MembersList = styled.ul`
  list-style: none;
  margin: 20px 0 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0;

    &:first-child {
      margin: 0;
    }
    strong {
      font-size: 18px;
    }
    > div {
      width: 320px;
      color: #666;
    }
  }
`;
export const Invite = styled(Form)`
  padding-bottom: 20px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`;
