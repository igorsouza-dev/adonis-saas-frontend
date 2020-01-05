import { useSelector } from 'react-redux';

export default function Can({ children, checkRole, checkPermission }) {
  const roles = useSelector(state => state.auth.roles);
  const permissions = useSelector(state => state.auth.permissions);
  function checkAuth() {
    if (checkRole && !roles.includes(checkRole)) {
      return false;
    }
    if (checkPermission && !permissions.includes(checkPermission)) {
      return false;
    }
    return true;
  }
  return typeof children === 'function'
    ? children(checkAuth())
    : checkAuth() && children;
}
