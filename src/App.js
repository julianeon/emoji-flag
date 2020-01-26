import React from 'react';
import _ from 'lodash'
import { Grid, Image } from 'semantic-ui-react'

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src='happy.png' />
  </Grid.Column>
))

const GridRow = () => <Grid>{columns}</Grid>
      
const rows = _.times(10, (i) => (  <GridRow/> ))

const GridPage = () => <div>{rows}</div>

function App() {
  return (
    <div>
      <GridPage/>
    </div>
  );
}

export default App;
