import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Match, Miss } from 'react-router'

//components
import NotFound from './components/shared/NotFound'
import App from './components/App';
import Scoring from './components/Scoring'

// Material UI functions
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()



const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />  
        <Match exactly pattern="/Scoring" component={Scoring} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
