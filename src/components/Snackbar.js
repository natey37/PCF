import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function DirectionSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{color: "white"}} onClick={handleClick(TransitionUp)}>Curious? See more info!</Button>
      <Snackbar
        style={{color: "white"}}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="These scores are calculated using the Google Natural Language Sentiment API. The averages are based on the scores of all user messages sent. "
      />
    </div>
  );
}
