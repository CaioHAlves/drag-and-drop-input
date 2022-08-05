import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },
  dropContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0',
    width: '800px',
    height: '200px',
    border: '4px dashed #4aa1f3'
  },
  dropMessage: {
    textAlign: 'center',
    color: '#4aa1f3',
  },
  icon: {
    width: '50px',
    height: '50px',
    color: '#4aa1f3',
  },
  input: {
    display: 'none',
    border: '1px solid red'
  },
  fileContainer: {
    display: 'flex',
    position: 'fixed',
    width: '800px',
    padding: '10px'
  },
  status: {
    padding: '4px'
  },
  error: {
    backgroundColor: '#c12d2d',
    margin: theme.spacing(0.5),
    color: '#fff'
  },
  sucess: {
    backgroundColor: '#3d85ca',
    margin: theme.spacing(0.5),
    color: '#fff'
  }
}))

export default useStyles