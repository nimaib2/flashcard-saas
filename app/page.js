import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {AppBar, Box, Button, Container, Grid, Toolbar, Typography} from "@mui/material"
import Head from 'next/head'




export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>
          Flashcard SaaS
        </title>
        <meta name = "description" content="Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant = "h6" style={{flexGrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color = "inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{
        textAlign:'center',
      }}>
        <Typography variant="h2">
          Welcome to Flashcard Saas!
        </Typography>
        <Typography variant="h5">
          {' '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant = 'contained' color="primary" sx={{st: 2}}>
          Get Started
        </Button>
      </Box>
      <Box sx={{my: 6, textAlign:'center'}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Easy Text Input
              <Typography>
                {' '}
                Simply input your text and let our software do the rest. Creating flashcards has never been easier
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Smart Flashcards
              <Typography>
                {' '}
                Our AI intelligently breaks down your text into concise flashcards, perfect for studying
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Accessible Anywhere
              <Typography>
                {' '}
                Access your flashcards from any device, at any time. Study on the go with ease!
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>

    
  );
}
