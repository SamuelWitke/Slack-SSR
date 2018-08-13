import MessageBar from "components/Messagebar";
import { Grid } from "semantic-ui-react";
export default () => (
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
        <h1> Welcome To User </h1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3} />
      <Grid.Column width={13} />
    </Grid.Row>
  </Grid>
);
