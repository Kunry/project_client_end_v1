import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Navigate } from 'react-router-dom';
const isPrivate = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoading, isLoggedIn } = useContext(AuthContext);

if (isLoading) return <h1>Loading...</h1>;

if (isLoggedIn) {
  return props.children;
} else {
  return <Navigate to={'/login'}/>
}

};

export default isPrivate;
