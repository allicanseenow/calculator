import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    margin: 5,
    display: 'inline-block',
  },
  root: {
    borderRadius: 50,
    width: ({ span = 1 }: { span?: number }) => 70 * span + (span - 1) * 10,
    height: 70,
    minWidth: 70,
  },
  label: {
    fontSize: 26,
    fontWeight: '500',
  },
  number: {
    backgroundColor: '#333333',
    color: 'white',
    '&:hover': {
      backgroundColor: '#262525',
    },
  },
  operator: {
    backgroundColor: '#FC9428',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c16d14',
    },
  },
  utility: {
    backgroundColor: '#A5A5A5',
    color: 'black',
    '&:hover': {
      backgroundColor: '#797777',
    },
  },
  active: {

  }
});
