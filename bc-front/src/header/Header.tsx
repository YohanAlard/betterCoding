import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ContactSupport from '@material-ui/icons/Contacts';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Brand from '../common/brand/Brand';

export interface IHeaderProps {
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Header(props: IHeaderProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={8}>
          <Paper square className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              orientation="horizontal"
              textColor="secondary"
              aria-label="icon tabs example"            >
              <Tab icon={<HomeIcon />} label="Resume" />
              <Tab icon={<ContactSupport />} label="Contact" />
              <Tab icon={<FavoriteIcon />} label="Inspiration" />
            </Tabs>
          </Paper>
        </Grid>

        <Grid item xs={4}>
         <Brand name="Better Coding"></Brand>
        </Grid>
      </Grid>
    </div>



  );
}
