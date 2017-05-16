import React, { Component } from 'react';
import HelloMessage from './HelloMessage';
import Timer from './Timer';
import TodoApp from './TodoApp';
import MarkdownEditor from './MarkdownEditor';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Messages from './Messages';
import Page from './Page';
import NumberList from './NumberList';
import NameForm from './NameForm';
import EssayForm from './EssayFormTextarea';
import FlavorForm from './FlavorFormSelect';
import Reservation  from './Reservation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Examples from React Docs</p>
        </div>
        {/*<hr />*/}
        {/*<NameForm />*/}
        {/*<hr />*/}
        {/*<EssayForm />*/}
        {/*<hr />*/}
        {/*<FlavorForm />*/}
        {/*<hr />*/}
        {/*<Reservation />*/}
        {/*<Page />*/}
        <TodoApp />
        <MarkdownEditor />
        <Clock />
        <LoginControl />
        <Toggle />
        <HelloMessage name="Vassil" />
        <Timer />
        <Messages unreadMessages={['React', 'Re: React', 'Re: Re: React']} />
        <NumberList numbers={[1, 2, 3, 4, 5]}/>
      </div>
    );
  }
}

export default App;
