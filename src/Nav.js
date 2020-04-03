import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import home_pin from './styling/home_pin.png'
import charge from './styling/charge.png'
import leaders from './styling/leaders.png'
import logout from './styling/logout.png'
import recharge from './styling/recharge.png'
import sentiment from './styling/sentiment.png'

import { Link } from "react-router-dom";





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{backgroundColor: '#122C34'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{color: '#FFED87'}}/>
          </IconButton>
          <Typography  style={{color: '#FFED87'}} variant="h6" noWrap>
            Positively Charged       
          </Typography>

            
          {/* <Typography  style={{color: '#FFED87', position: "absolute", paddingLeft: "1500px"}} variant="h6" noWrap>
            FAQ
          </Typography> */}
        
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div  style={{backgroundColor: '#122C34'}} className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? null : <ChevronLeftIcon style={{color: '#FFED87'}}/>}
          </IconButton>
        </div>
        <Divider />
        <List style={{backgroundColor: '#63E2C6'}}>
          {['Bulletin Board'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              <Link to="/home"><img style={{width: '40px', height: '40px'}}src={home_pin}></img></Link>
                {/* {fix sizing and font} */}
                <Link to="/home"><ListItemText style={{paddingLeft: "40px"}}primary={text} /></Link>
              </ListItemIcon>
            </ListItem>
          ))}
          <br></br>
          <br></br>

           {['Charge'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              <Link to="/charge"><img style={{width: '40px', height: '40px'}}src={charge}></img></Link>
                {/* {fix sizing} */}
                <Link to="/charge"><ListItemText style={{paddingLeft: "40px"}}primary={text} /></Link>
              </ListItemIcon>
            </ListItem>
          ))}
          <br></br>
          <br></br>

           {['Recharge'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              <Link to="/recharge"><img style={{width: '40px', height: '40px'}}src={recharge}></img></Link>
                {/* {fix sizing and font} */}
                <Link to="/recharge"><ListItemText style={{paddingLeft: "40px"}}primary={text} /></Link>
              </ListItemIcon>
            </ListItem>
          ))}
          <br></br>
        </List>
        
        <Divider/>
        
        <List style={{backgroundColor: '#63E2C6', height:"100vh"}}>
            <br></br>
            {['Feelings'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>
                <Link to="/feelings"><img style={{width: '40px', height: '40px'}}src={sentiment}></img></Link>
                    {/* {fix sizing and font} */}
                    <Link to="/feelings"><ListItemText style={{paddingLeft: "40px", fontWeight: "bold"}}primary={text} /></Link>
                </ListItemIcon>
                </ListItem>
            ))}
            <br></br>
            <br></br>

                {['Leaders'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>
                <Link to="/leaders"><img style={{width: '40px', height: '40px'}}src={leaders}></img></Link>
                    {/* {fix sizing and font} */}
                    <Link to="/leaders"><ListItemText style={{paddingLeft: "40px"}}primary={text} /></Link>
                </ListItemIcon>
                </ListItem>
            ))}
            <br></br>
            <br></br>

                {['Log Out'].map((text, index) => (
                <ListItem  button key={text}>
                <ListItemIcon>
                    <img style={{width: '40px', height: '40px'}}src={logout}></img>
                    {/* {fix sizing and font} */}
                    <ListItemText style={{paddingLeft: "40px"}}primary={text} />
                </ListItemIcon>
                </ListItem>
            ))}
        </List>
      </Drawer>
      {/* <main className={classes.content} style={{backgroundColor: '#2A4494', height:"100vh"}}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          this is positively charged! 
        </Typography>
        <Typography paragraph>
        send some postive charge!
        </Typography>
      </main> */}
    </div>
  );
}
