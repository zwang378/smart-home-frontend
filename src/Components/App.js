import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Messages from './Messages'
import { NotFound } from './Errors'
import Layout from './Layout'


export default class extends Component {
  state = {
    messages: []
  }

  async componentDidMount() {
    // need await because of async
    const messages = await (await fetch('http://localhost:3004/api/shlogs')).json()

    this.setState({ messages })
  }

  render() {
    const { messages } = this.state

    return (
      <BrowserRouter>
        <Layout messages={messages}>
          <Switch>
            <Route exact path="/" render={
              props => <Messages {...props} messages={messages} />
            } />
            <Route path="/about" render={
              () => <dl>About Smart Home...</dl>
            } />
            <Route path="/callback" render={
              props => <Messages {...props} messages={messages} />
            } />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>

    )
  }
}

