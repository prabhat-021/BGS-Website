





"use client";
import NextLink from "next/link";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  Menu,
  MenuItem, Divider, Popover,
} from '@mui/material';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileNav, setMobileNav] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenDropdown(index);
  };

  const handleMenuClose = () => {
    setTimeout(() => {
      setOpenDropdown(null);
      setAnchorEl(null);
    }, 200);
  };

  const handleClick = (event) => {
    setMobileNav(event.currentTarget);
  };

  const handleClose = () => {
    setMobileNav(null);
  };


  const onChangeLabel = (d) => {
    if (currentMenu === d) {
      setCurrentMenu(null);
    } else {
      setCurrentMenu(d);
    }
  };

  const navItems = [
    {
      label: 'Home',
      link: '/',
      icon: 'material-symbols:home-rounded',
      // subMenu: []
    },
    {
      label: 'About',
      link: '/about',
      icon: 'flat-color-icons:about',
      // subMenu: []
    },
    {
      label: 'Outsourcing',
      link: '/outsourcing/erp',
      icon: 'ix:user-management-filled',
      subMenu: [
        {
          label: 'ERP & Customized Software',
          link: '/outsourcing/erp',
          icon: 'ix:user-management-filled'
        },
        {
          label: 'Software Testing',
          link: '/outsourcing/software',
          icon: 'ix:user-management-filled'
        }]
    },
    {
      label: 'Investing',
      link: '/investing',
      icon: 'gg:website',
      subMenu: [
        { label: 'Mutual Fund', link: '/investing', icon: 'ix:user-management-filled' },
        { label: 'Wealth Management', link: '/investing/wealth', icon: 'ix:user-management-filled' },
        { label: 'Portfolio Management', link: '/investing/portfolio', icon: 'ix:user-management-filled' },
        { label: 'Pension Funds', link: '/investing/pension', icon: 'ix:user-management-filled' },
        { label: 'Real Estate', link: '/investing/real_estate', icon: 'ix:user-management-filled' },
      ]
    },
    {
      label: 'Careers',
      link: '/careers',
      icon: 'mdi:resume',
      subMenu: [
        { label: 'Internship', link: '/careers/internship', icon: 'ix:user-management-filled' },
        { label: 'Current Openings', link: '/careers/current', icon: 'ix:user-management-filled' },
      ]},
    {
      label: 'Gallery',
      link: '/gallery',
      icon: 'zondicons:travel',
      // subMenu: []
    },
    {
      label: 'Contact Us',
      link: '/contact',
      icon: 'vaadin:touch',
      // subMenu: []
    },
  ];



  return (
    <Grid container>
      <Grid item xs={isMobile ? 12 : 8} md={isMobile ? 0 : 3.5} sx={{py:2, borderBottom: '2px solid lightGrey' }}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Avatar alt="Bridge Group Logo" src="/image.png" sx={{ width: 60, height: 60 }} />
          <Typography variant="h5" sx={{ fontSize: { lg: '25px', xs: '18px' }, color: 'black', fontWeight: 'bold' }}>
            Bridge Group Solutions
          </Typography>
        </Stack>
      </Grid>
      {isMobile ? (
        <>
          <Stack direction="row" spacing={1} sx={{mt:2}} alignItems="center" justifyContent="center">
          <IconButton onClick={handleClick} sx={{cursor:"pointer"}} >
            <MenuIcon />
          </IconButton>
            <Typography sx={{fontSize:"18px",fontWeight: 'bold'}}>Menu</Typography>
          </Stack>
          <Popover
            id="simple-popover"
            open={Boolean(mobileNav)}
            anchorEl={mobileNav}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
            transformOrigin={{ vertical: 'top', horizontal: 'left'}}
            sx={{ mt: 1 }}>
            <Box sx={{ width: '250px', p: 1 }}>
              <Stack sx={{ p: 1 }}>
                {navItems.map((option, index) => (
                  <React.Fragment key={index}>
                    <MenuItem  sx={{ p: 1.5, borderRadius: 1 }} onClick={() => {
                      onChangeLabel(option?.label);
                    }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Stack direction="row" spacing={1}>
                        <Icon icon={option?.icon} width="20" height="20" color={option?.color} />
                        <Typography variant="h5" sx={{ color: 'primary.darker', fontSize: { lg: '14px', xs: '12px' }}}>{option?.label}</Typography>
                      </Stack>
                        {(option?.subMenu?.length > 0 && currentMenu === option?.label) &&  <ArrowDropUpIcon />}
                        {(option?.subMenu?.length > 0 && currentMenu !== option?.label) &&  <ArrowDropDownIcon /> }
                      </Stack>
                    </MenuItem>
                    {(option?.subMenu?.length > 0 && currentMenu === option?.label) && option?.subMenu?.map((item) => (
                      <MenuItem sx={{ p: 1.5, borderRadius: 1, }}>
                        <Stack direction="row" spacing={1}>
                          <Icon icon={item?.icon} width="20" height="20" color={option?.color} />
                          <Typography variant="h5" sx={{ color: 'secondary', fontSize: { lg: '14px', xs: '12px' }}}>{item?.label}</Typography>
                        </Stack>
                      </MenuItem>))}
                    {index < navItems.length - 1 && <Divider sx={{ borderStyle: 'dashed' }} />}
                  </React.Fragment>
                ))}
              </Stack>
            </Box>
          </Popover>
        </>
      ) : (
        <Grid item md={8.5}
          sx={{ py: 2, px: 4, borderTopLeftRadius: 40, borderLeft: '2px solid lightGrey', borderTop: '2px solid lightGrey'}}>
          <Box sx={{ borderRadius: 4, backgroundColor: 'lightGrey', color: 'black', p: 1, zIndex: 1000 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Tabs value={value} onChange={handleChange} aria-label="navbar-tabs" sx={{ ml: 3 }}>
                {navItems.map((item, index) => (
                  <Tab key={index} component={NextLink} href={item.link} label={
                      <Stack direction="row" spacing={1} onMouseEnter={(e) => item.subMenu && handleMenuOpen(e, index)}>
                        <Icon icon={item.icon} width="20" height="20" />
                        <Typography variant="h5" sx={{ color: 'primary.darker', fontSize: { lg: '14px', xs: '12px' } }}>
                          {item.label}
                        </Typography>
                      </Stack>
                    } />
                ))}
              </Tabs>
            </Stack>
          </Box>
        </Grid>
      )}

      {/* Separate Submenu Component to Fix MUI Fragment Issue */}
      {navItems.map((item, index) =>
        item.subMenu ? (
          <Menu key={index} anchorEl={anchorEl} open={openDropdown === index} onClose={handleMenuClose}
            MenuListProps={{
              onMouseEnter: () => setOpenDropdown(index),
              onMouseLeave: handleMenuClose,
            }}
            getcontentanchorel={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            {item.subMenu.map((subItem, subIndex) => (
              <MenuItem key={subIndex} component={NextLink} href={subItem.link}>
                {subItem.label}
              </MenuItem>
            ))}
          </Menu>
        ) : null,
      )}
    </Grid>
  );
}