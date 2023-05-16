import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent, CardActions, Stack, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function AppCircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} sx={{height:50}}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

AppCircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};


export default function AppCircularStatic({list}) {
  // const [progress, setProgress] = React.useState(10);
  
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= {list} ? 0 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Card sx={{maxWidth:300}}>
  <CardContent>
    <Typography variant='h6' sx={{m:1}}>
      Assignment Completion
    </Typography>

    {list.map((prog, index) => (
      <>
      <Stack key={index} direction='row' spacing={2} sx={{display:'flex' , justifyContent:'space-between', alignItems:'center', m:2}}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <AppCircularProgressWithLabel value={prog.value} />
          <Typography>
            {prog.name}
          </Typography>
        </Stack>
        <ArrowForwardIosIcon />
      </Stack>
      <Divider variant="middle" sx={{ my: 1, color:'grey' }} />
      </>
    ))}

  </CardContent>
</Card>

  );
}