import { Link} from 'react-router-dom';
import { AppRoute } from '../../use/routes';

const wrapper = {
  height: '100vh',
  width: '100%vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const link = {
  textDecoration: 'none',
};

function PageNotFound ():JSX.Element {
  return (
    <div style={wrapper}>
      <Link style={link} to={AppRoute.Main}><h3>Cтраница не найдена, перейти на главную?</h3></Link>
    </div>
  );
}

export default PageNotFound;
