import * as React from 'react';
import {
    AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Chip,
    Container
    } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function ButtonAppBar() {
	const getRandomArbitrary = (min, max) => (
		Math.floor(Math.random() * (max - min) + min)
	)
	const getDimensions = () => (
		{
			x: 420,
			y: getRandomArbitrary(200, 500)
		})
	const getPlaceholderUrl = ({x,y})=> (`https://picsum.photos/${x}/${y}`)
    
    const makePictureArray = () => (null)
    
    const tags = ['lorem', 'ipsum', 'dolor', 'spackle']

	return (
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
		<Box sx={{ width: '100%', height: '200%', overflowY: 'scroll' }}>
	  <Container>
		<ImageList variant="masonry" cols={3} gap={8}>
  		{Array(15).fill('').map((item, idx) => (
    			<ImageListItem key={idx}>
      				<img
        			src={getPlaceholderUrl(getDimensions())}
				alt={`idx`}
        			loading="lazy"
      				/>
                <ImageListItemBar
                        title={`Image #${idx}`}
                        subtitle={<Chip label="something" color="primary" />}
                        position="below"
                    />
    			</ImageListItem>
 		 ))}
	</ImageList>
		</Container>
    </Box>
		</Box>
  );
}

