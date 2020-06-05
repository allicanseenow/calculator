import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    // minWidth: 400,
    minHeight: 400,
    background: 'black',
    borderRadius: 10,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  resultContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 45,
  },
  buttonContainer: {
    marginTop: '1rem',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});
