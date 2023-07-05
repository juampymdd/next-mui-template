
import NextLink from "next/link"

import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton 
          size="large"
          edge="start"
        >
          <MenuOutlined />
        </IconButton>
        
        <NextLink href="/" passHref style={{textDecoration: 'none'}}>
          <Typography variant="h6" component="div" color="white">CookieMaster</Typography>
        </NextLink>
        
        <div style={{flex:1}}></div>
        
        <NextLink href="/theme-changer" passHref style={{textDecoration: 'none'}}>
          <Typography variant="h6" color="white">Cambiar Theme</Typography>
        </NextLink>

      </Toolbar>
    </AppBar>
  )
}
