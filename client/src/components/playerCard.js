import React from 'react';
import { Grid, Card, Container } from 'semantic-ui-react';

const PlayerCard = (props) => {
  console.log("playerCard", props.playerData);
  return(
    <div>
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header>Players</Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid columns={4}>
              <Grid.Row>
                {props.playerData.map(soccer =>
                <Grid.Column key={soccer.id}>
                  <Card color="pink">
                    <Card.Header> {soccer.name} </Card.Header>
                    <Card.Header>{soccer.country}</Card.Header>
                    <Card.Header>{soccer.searches}</Card.Header>
                  </Card>
                </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    </div>
  )
}

export default PlayerCard;
