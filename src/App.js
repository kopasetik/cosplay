import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Container from '@material-ui/core/Container';

export default function ButtonAppBar() {
	const getRandomArbitrary = (min, max) => (
		Math.floor(Math.random() * (max - min) + min)
	)
	const getDimensions = () => (
		{
			x: getRandomArbitrary(50, 300),
			y: getRandomArbitrary(80, 350)
		})
	const getPlaceholderUrl = ({x,y})=> (`https://via.placeholder.com/${x}x${y}.png`)

	return (
		<Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cosplays
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
		</Box>
		<Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
	  <ImageList variant="masonry" cols={3} gap={8}>
  		{Array(15).fill('').map((item, idx) => (
    			<ImageListItem key={idx}>
      				<img
        			src={getPlaceholderUrl(getDimensions())}
				alt={`idx`}
        			loading="lazy"
      				/>
    			</ImageListItem>
 		 ))}
	</ImageList>
    </Box>
		</Container>
  );
}

