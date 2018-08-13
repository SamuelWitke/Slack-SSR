import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import Examples from "../components/examples";
import MessageBar from "../components/Messagebar";
import { Grid } from "semantic-ui-react";
import { Dispatch } from "redux";

interface Props {
  dispatch: Dispatch;
}

class Index extends React.Component<Props> {
  render() {
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
            <Examples />;
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

export default Index;
