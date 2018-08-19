import * as React from "react";
import MessageBar from "../../components/Messagebar";
import { Grid } from "semantic-ui-react";
import Form from "./Form";
import Login from "./Login";
import { Menu, Segment } from "semantic-ui-react";

export default class UserIndex extends React.Component {
  state = { activeItem: "Login" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    console.log(activeItem);

    return (
      <Grid celled={true}>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={13} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <MessageBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Menu pointing>
              <Menu.Item
                name="Login"
                active={activeItem === "Login"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Sign Up"
                active={activeItem === "Sign Up"}
                onClick={this.handleItemClick}
              />
            </Menu>
            <Segment>
              <h1> Welcome To User </h1>
              {activeItem === "Login" ? <Login /> : <Form />}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={13} />
        </Grid.Row>
      </Grid>
    );
  }
}
