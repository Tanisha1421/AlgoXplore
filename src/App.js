// eslint-disable-next-line
import { Card, CardContent,CardHeader,Grid,Grow, Typography, Container ,Button,ButtonBase, CardMedia} from '@mui/material';

import "./App.css";

function App() {

  return (
    <>
    
    <Grow in>
    <Container maxWidth="xl"  className="container">
      <Typography variant = 'h1' className="header" >
      ALGOXPLORE
      </Typography >

    
        <Card  className="card" elevation={0} >
      <img  src={require(`./assets/sudoku_solver.jpg`)} className="img-responsive" alt='credit-card.png' />

      <CardHeader  varant ='h3' title="Sudoku Solver" />
            <CardContent className='content'>
            A sudoku solver  which lets user make their own sudoku and
also solves the sudoku using backtracking algorithm
            </CardContent>

        <Button variant="contained" href='https://sudoku-solver-3mzaqk740-tanisha1421s-projects.vercel.app/'>
        Solve Puzzle
        </Button>
        
      </Card>

        <Card  className="card" elevation={0} >
      <img  src={require(`./assets/sorting.38780fe7a3d79244394d.jpg`)} className="img-responsive" alt='Sorting_visualizer.png' />

      <CardHeader  varant ='h3' title="Sorting Visualizer" />
            <CardContent className='content'>
            A Sorting visualizer to visualize and understand the sorting algorithms and understand the time complexity of them.
            </CardContent>

        <Button variant="contained" href='https://sorting-visualizer-6x8u5ew7a-tanisha1421s-projects.vercel.app/'>
        Visualize
        </Button>
        
      </Card>

      <Card   className="card" elevation={0} >
      <img  src={require(`./assets/tictactoe.png`)} className="img-responsive" alt='credit-card.png' />
      <CardHeader  varant ='h3' title="Tic Tac Toe" />
            <CardContent className='content'>
            A user-friendly web page demonstrating Tic Tac Toe Game using the minimax
algorithm to build an unbeatable tic tac toe.
            </CardContent>
        <Button variant ='contained'  href= "https://sorting-visualizer-bovk-cj6hxqvds-tanisha1421s-projects.vercel.app/">
          Let's Play
        </Button>
        </Card>
      <Card   className="card" elevation={0} >
      <img  src={require(`./assets/snack_mania.jpeg`)} className="img-responsive" alt='credit-card.png' />
      <CardHeader  varant ='h3' title="Snack Mania" />
            <CardContent className='content'>
             A snack Mania application lets user to play around with snack using strok of the arrow keys
            </CardContent>
        <Button variant ='contained'  href= "https://snake-game-gxq7r0deu-tanisha1421s-projects.vercel.app/">
          Let's Play
        </Button>
        </Card>



    </Container>
    </Grow>
    </>
  );
}

export default App;
