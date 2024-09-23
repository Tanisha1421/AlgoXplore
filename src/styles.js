import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"column",
        margin: '30px 0',
        padding: '30px',
    },
    "& .MuiCard-root": {
      backgroundColor: "yellow"
    },
    card: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow:'none',
          alignItems: 'center',
          padding:'8px' ,
          margin:'8px',

        
      },
    //   mainContainer: {
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       [theme.breakpoints.down('xs')]: {
    //         flexDirection: 'column-reverse',
    //       },
    //   },
      header: {
        fontSize:'2rem',
        color: 'rgba(0,183,255, 1)',
        textAlign:'center'
      },
  }));
// export default useStyles;
