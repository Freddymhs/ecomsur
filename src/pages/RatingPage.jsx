import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  , useParams,
  useRouteMatch
} from "react-router-dom";
import './estilos.css';

const RatingPage = () => {
  let match = useRouteMatch();
  return (
    // <div>
    //   <ul>

    //     <li>
    //       <Link to={`${match.url}/components`}>Components</Link>
    //     </li>
    //     <li>
    //       <Link to={`${match.url}/props-v-state`}>
    //         Props v. State
    //       </Link>
    //     </li>
    //   </ul>


    //   <Switch>
    //     <Route path={`${match.path}/:topicId`}>
    //       <Topic />
    //     </Route>
    //     <Route path={match.path}>
    //       <h3>Please select a topic.</h3>
    //     </Route>
    //   </Switch>
    // </div>
    <div className="container__main">
      sdads
    </div>
  );
}

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
export default RatingPage;