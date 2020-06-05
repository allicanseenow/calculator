import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    // minWidth: 400,
    maxWidth: 340,
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
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  result: {
    fontSize: 45,
    lineHeight: 1.2,
  },
  subRow: {
    fontSize: 15,
    lineHeight: 1.2,
  },
});
