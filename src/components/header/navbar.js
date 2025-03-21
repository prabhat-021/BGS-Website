"use client";
import NextLink from "next/link";
import {
  Box,
  Container,
  Stack,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
const navlogo = '/navlogo.png';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show navbar when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', href: '/Home' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={NextLink} href={item.href} sx={{ py: 2 }}>
            <ListItemText
              primary={item.label}
              sx={{
                color: '#1C1C1C',
                '& .MuiTypography-root': {
                  fontSize: '16px',
                  fontWeight: 500,
                }
              }}
            />
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        <ListItem component={NextLink} href="/contact" sx={{ py: 2 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#1C1C1C',
              color: 'white',
              borderRadius: '25px',
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#333',
              }
            }}
          >
            Contact Us
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 3,
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '-100%'})`,
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
          px: 4,
          backgroundColor: visible ? '#3A3A3A' : 'transparent',
          borderRadius: '50px',
          transition: 'all 0.3s ease',
        }}
      >
        <NextLink href="/" passHref style={{ textDecoration: 'none' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              src={navlogo}
              alt="Studio Logo"
              width={isMobile ? 50 : 60}
              height={isMobile ? 16 : 20}
              style={{
                objectFit: 'contain',
                filter: visible ? 'invert(1)' : 'none'
              }}
            />
          </Stack>
        </NextLink>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: visible ? 'white' : '#1C1C1C' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack direction="row" spacing={4} alignItems="center">
            {navItems.map((item) => (
              <NextLink key={item.label} href={item.href} passHref style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: visible ? 'white' : '#1C1C1C',
                    textTransform: 'none',
                    fontSize: '16px',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      opacity: 0.8,
                      '&::after': {
                        transform: 'scaleX(1)',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -2,
                      width: '100%',
                      height: '2px',
                      backgroundColor: visible ? 'white' : '#1C1C1C',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </NextLink>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: visible ? 'white' : '#1C1C1C',
                color: visible ? '#1C1C1C' : 'white',
                borderRadius: '25px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: visible ? 'white' : '#1C1C1C',
                  opacity: 0.9,
                }
              }}
              endIcon={<span>→</span>}
            >
              Contact Us
            </Button>
          </Stack>
        )}

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Container>
  );
}