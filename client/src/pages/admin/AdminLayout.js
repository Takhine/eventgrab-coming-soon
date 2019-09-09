import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Devices from '@material-ui/icons/Devices'; 
import Cancel from '@material-ui/icons/Cancel'; 
import {withRouter} from 'react-router-dom'; 
import {isAuthenticated, logOut} from './helper'; 
import { IconButton } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function AdminLayout(props) {
  const classes = useStyles();

  React.useEffect(() => {
    if(!isAuthenticated()){
      props.history.push('/admin'); 
    }
  }, [props]); 


  function handleLogout() {
    logOut();
    props.history.push('/') 
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{color: 'white'}}>
            eventgrab coming soon 2.0 - admin
          </Typography>

          <div style={{marginLeft: 'auto'}}>
          <IconButton color="inherit" onClick={() => handleLogout()}><Cancel/></IconButton>
        </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem button key={'Packages'} onClick={() => props.history.push('/admin-packages') }>
              <ListItemIcon><MailIcon/></ListItemIcon>
              <ListItemText primary={'Packages'} />
            </ListItem>

            <ListItem button key={'Equipments'} onClick={() => props.history.push('/admin-equipments') }>
            <ListItemIcon><Devices/></ListItemIcon>
              <ListItemText primary={'Equipment'} />
            </ListItem>


            <ListItem button key={'Orders'} onClick={() => props.history.push('/admin-orders') }>
            <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary={'Orders'} />
            </ListItem>
            
            <ListItem button key={'Enquiries'} onClick={() => props.history.push('/admin-enquiries') }>
            <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary={'Enquiries'} />
            </ListItem>

        </List>
       </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(AdminLayout); 