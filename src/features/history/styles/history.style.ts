import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
    width: '100%',
  },
  innerContainer: {
    maxWidth: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  historyTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: '1.5rem',
  },
  historyContainer: {
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
