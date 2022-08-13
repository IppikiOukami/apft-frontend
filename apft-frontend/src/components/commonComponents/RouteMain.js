import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainLandingPage from "../landingPage/MainLandingPage";

export default function RouteMain(){
    return(
      <div className='mainTag'>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" component={<MainLandingPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}