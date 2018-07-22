//this is boiler plate
import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: ''};

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password: password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

/*this exports the whole thing. if we do the de structure, it only
// gives the object

onChangeText={password => this.setState({ password })}

password is the paremeter(the one that the user 
just entered) and this.setState is a function inside
of that method. { password } is the de-structuring
of the parameter password and assigning it directly to the
password in state. 

*/



export default LoginForm;