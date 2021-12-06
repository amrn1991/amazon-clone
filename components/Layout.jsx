import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import useStyles from '../utils/styles';

const Layout = ({ title, description, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        {description && <meta name="description" content={description} /> }
        <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/cart" passHref>
            <Link>Cart</Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>Login</Link>
          </NextLink>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>All Rights Reserved &copy;</Typography>
      </footer>
    </div>
  );
};

export default Layout;
