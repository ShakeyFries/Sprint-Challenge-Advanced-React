import React from 'react';
import { Grid, Card, Container } from 'semantic-ui-react';

const PlayerCard = (props) => {
  return(
    <div>
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header>Players</Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid columns={5}>
              <Grid.Row>
                {props.playerData.map(person =>
                <Grid.Column key={person.id}>
                  <Card color="hot-pink">
                <Card.Header wrapped ui={false} >{props.playerData.name} </Card.Header>
                    <Card.Header>{props.playerData.country}</Card.Header>
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
