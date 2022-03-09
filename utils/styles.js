import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    '& a': {
      color: '#fff',
      marginLeft: 10,
      textDecoration: 'none',
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: 10,
  },
  section: {
    marginBottom: 10,
    marginTop: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#fff',
    textTransform: 'initial',
  },
  steps: {
    backgroundColor: 'transparent',
    marginTop: 10
  },
});

export default useStyles;
