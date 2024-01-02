import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {dummyHL7Messages} from './DummyHL7Messages'


const OutlinedCard = ({ data }) => {
  const cardContent = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`HL7 Message #${data.id}`}
        </Typography>
        <Typography variant="h5" component="div">
          {`Host: ${data.host}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Correlation ID: ${data.correlationId}`}
        </Typography>
        <Typography variant="body2">
          {`Message: ${data.message}`}
          <br />
          {`Timestamp: ${data.timestamp}`}
          <br />
          {`Status: ${data.status}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{cardContent}</Card>
    </Box>
  );
};


const CardDesign = () => {
  return (
    <div style={{ display: 'flex' }}>
      {dummyHL7Messages.map((message) => (
        <OutlinedCard key={message.id} data={message} />
      ))}
    </div>
  );
};


export default CardDesign;
