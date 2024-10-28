import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FC, useState } from 'react';
import Avatar from '@mui/material/Avatar/Avatar';
import Link from 'next/link';

type LinkPages = {
  page: string;
  link: string;
};

const togglePages: LinkPages[] = [
  { page: 'О нас', link: '#inform' },
  { page: 'Завершенные дела', link: '#cases' },
  { page: 'Отзывы', link: '#reviews' },
  { page: 'Ответы на вопросы', link: '#questions' },
  { page: 'Контакты', link: '#contacts' },
];

const Navigation: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Avatar
          alt="Logo"
          src="/logo.jpg"
          sx={{ width: 50, height: 50, marginRight: 2 }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LECALIS CONSILIARIUS
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {togglePages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link href={page.link} passHref legacyBehavior>
                  <a
                    style={{
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {page.page}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LECALIS CONSILIARIUS
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {togglePages.map((page, index) => (
            <Link key={index} passHref legacyBehavior href={page.link}>
              <a
                style={{
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {page.page}
              </a>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Navigation;
