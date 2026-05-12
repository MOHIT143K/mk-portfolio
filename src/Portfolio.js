import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Box,
  Button,
  Fade,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { personalInfo, skills, experiences, projects, education } from './mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const titles = [
    "Technical Lead & Full Stack Developer",
    "Solution Architect"
  ];

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const title = titles[currentTitleIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= title.length) {
        setTypedText(title.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Wait 2 seconds before switching to next title
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentTitleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const getNextSection = () => {
    const sections = ['home', 'about', 'skills', 'experience', 'contact'];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      return sections[currentIndex + 1];
    }
    return sections[0]; // Loop back to home if at the end
  };

  const menuItems = ['About', 'Skills', 'Experience', 'Contact'];

  return (
    <Box sx={{ bgcolor: '#0a0e27', minHeight: '100vh', color: '#ffffff' }}>
      {/* Navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          pt: 2,
        }}
      >
        <Container maxWidth="xl" sx={{ width: 'min(1200px, 95vw)' }}>
          <Box
            sx={{
              bgcolor: trigger ? 'rgba(15, 22, 41, 0.98)' : 'rgba(10, 14, 39, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '50px',
              border: '1px solid rgba(20, 184, 166, 0.1)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 60 }, px: { xs: 2, md: 3 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '22px', md: '24px' },
                  background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => scrollToSection('home')}
              >
                MK
              </Typography>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    sx={{
                      color: activeSection === item.toLowerCase() ? '#14b8a6' : '#94a3b8',
                      fontWeight: activeSection === item.toLowerCase() ? 600 : 500,
                      fontSize: '14px',
                      px: 2.5,
                      py: 1,
                      textTransform: 'none',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      bgcolor: activeSection === item.toLowerCase() ? 'rgba(20, 184, 166, 0.1)' : 'transparent',
                      '&:hover': {
                        color: '#14b8a6',
                        bgcolor: 'rgba(20, 184, 166, 0.1)',
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}

                {/* Contact Icons */}
                <Box sx={{ display: 'flex', gap: 0.5, ml: 1.5, pl: 1.5, borderLeft: '1px solid rgba(148, 163, 184, 0.2)' }}>
                  <IconButton
                    href={personalInfo.github}
                    target="_blank"
                    size="small"
                    sx={{
                      color: '#94a3b8',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#14b8a6',
                        bgcolor: 'rgba(20, 184, 166, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    href={personalInfo.linkedin}
                    target="_blank"
                    size="small"
                    sx={{
                      color: '#94a3b8',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#14b8a6',
                        bgcolor: 'rgba(20, 184, 166, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    href={`mailto:${personalInfo.email}`}
                    size="small"
                    sx={{
                      color: '#94a3b8',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#14b8a6',
                        bgcolor: 'rgba(20, 184, 166, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { xs: 'flex', md: 'none' }, color: '#14b8a6' }}
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(15, 22, 41, 0.98)',
            backdropFilter: 'blur(20px)',
            width: { xs: '100%', sm: 320 },
            border: 'none',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
          },
        }}
        sx={{
          '& .MuiBackdrop-root': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
          },
        }}
      >
        <List sx={{ px: 2, py: 3 }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              sx={{
                py: 2.5,
                px: 3,
                mb: 1,
                borderRadius: '12px',
                borderLeft: activeSection === item.toLowerCase() ? '4px solid #14b8a6' : '4px solid transparent',
                bgcolor: activeSection === item.toLowerCase() ? 'rgba(20, 184, 166, 0.15)' : 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(20, 184, 166, 0.1)',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    color: activeSection === item.toLowerCase() ? '#14b8a6' : '#cbd5e1',
                    fontWeight: activeSection === item.toLowerCase() ? 700 : 500,
                    fontSize: '18px',
                    letterSpacing: '0.5px',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ px: 5, py: 3, borderTop: '1px solid rgba(148, 163, 184, 0.1)', display: 'flex', gap: 2, justifyContent: 'center' }}>
          <IconButton
            href={personalInfo.github}
            target="_blank"
            sx={{
              color: '#94a3b8',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              '&:hover': {
                color: '#14b8a6',
                bgcolor: 'rgba(20, 184, 166, 0.1)',
                borderColor: '#14b8a6',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={personalInfo.linkedin}
            target="_blank"
            sx={{
              color: '#94a3b8',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              '&:hover': {
                color: '#14b8a6',
                bgcolor: 'rgba(20, 184, 166, 0.1)',
                borderColor: '#14b8a6',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href={`mailto:${personalInfo.email}`}
            sx={{
              color: '#94a3b8',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              '&:hover': {
                color: '#14b8a6',
                bgcolor: 'rgba(20, 184, 166, 0.1)',
                borderColor: '#14b8a6',
              },
            }}
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2, md: 0 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '20%',
            right: { xs: '-30%', md: '-10%' },
            width: { xs: '400px', md: '600px' },
            height: { xs: '400px', md: '600px' },
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '10%',
            left: { xs: '-20%', md: '-5%' },
            width: { xs: '350px', md: '500px' },
            height: { xs: '350px', md: '500px' },
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 25s ease-in-out infinite reverse',
          },
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '50%': { transform: 'translate(50px, 50px) scale(1.1)' },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: '#14b8a6',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: { xs: '14px', md: '18px' },
                }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '40px', sm: '56px', md: '72px', lg: '80px' },
                  fontWeight: 800,
                  color: '#e2e8f0',
                  mb: 2,
                  letterSpacing: '-2px',
                  lineHeight: 1.1,
                }}
              >
                {personalInfo.name}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '24px', sm: '36px', md: '48px', lg: '56px' },
                  fontWeight: 700,
                  color: '#76f5ff',
                  mb: 4,
                  letterSpacing: '-1px',
                  lineHeight: 1.2,
                  minHeight: { xs: '60px', md: '80px' },
                  '&::after': {
                    content: '""',
                    display: typedText.length < personalInfo.title.length ? 'inline-block' : 'none',
                    width: '3px',
                    height: { xs: '24px', md: '48px' },
                    bgcolor: '#14b8a6',
                    ml: 1,
                    animation: 'blink 1s infinite',
                  },
                  '@keyframes blink': {
                    '0%, 50%': { opacity: 1 },
                    '51%, 100%': { opacity: 0 },
                  },
                }}
              >
                {typedText}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '16px', md: '18px' },
                  color: '#94a3b8',
                  mb: 5,
                  maxWidth: '700px',
                  lineHeight: 1.8,
                }}
              >
                {personalInfo.bio}
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size={isMobile ? 'medium' : 'large'}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollToSection('skills')}
                  sx={{
                    background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
                    color: '#ffffff',
                    px: { xs: 3, md: 4 },
                    py: { xs: 1, md: 1.5 },
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 600,
                    borderRadius: '8px',
                    textTransform: 'none',
                    boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 30px rgba(20, 184, 166, 0.5)',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    href={personalInfo.github}
                    target="_blank"
                    size={isMobile ? 'small' : 'medium'}
                    sx={{
                      color: '#94a3b8',
                      border: '1px solid #334155',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#14b8a6',
                        borderColor: '#14b8a6',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <GitHubIcon fontSize={isMobile ? 'small' : 'medium'} />
                  </IconButton>
                  <IconButton
                    href={personalInfo.linkedin}
                    target="_blank"
                    size={isMobile ? 'small' : 'medium'}
                    sx={{
                      color: '#94a3b8',
                      border: '1px solid #334155',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#14b8a6',
                        borderColor: '#14b8a6',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <LinkedInIcon fontSize={isMobile ? 'small' : 'medium'} />
                  </IconButton>
                  <IconButton
                    href={`mailto:${personalInfo.email}`}
                    size={isMobile ? 'small' : 'medium'}
                    sx={{
                      color: '#94a3b8',
                      border: '1px solid #334155',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#14b8a6',
                        borderColor: '#14b8a6',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <EmailIcon fontSize={isMobile ? 'small' : 'medium'} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>

        {/* Scroll Down Indicator */}
        <Box
          className="css-1cy5ea3"
          sx={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            pointerEvents: 'auto',
          }}
        >
          <IconButton
            className="css-iu2azy"
            onClick={() => scrollToSection(getNextSection())}
            sx={{
              color: '#ffffff',
              pointerEvents: 'auto',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              padding: '12px',
              '&:hover': {
                transform: 'scale(1.1)',
                bgcolor: 'rgba(118, 245, 255, 0.1)',
                borderColor: 'rgba(118, 245, 255, 0.3)',
              },
            }}
          >
            <ArrowDownwardIcon
              className="css-17julut"
              sx={{ fontSize: '40px' }}
            />
          </IconButton>
        </Box>

        {/* WhatsApp Floating Button */}
        <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100 }}>
          <Tooltip
            title="Chat with us on WhatsApp"
            placement="left"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#64748b',
                  color: '#ffffff',
                  fontSize: '14px',
                  py: 1,
                  px: 2,
                  '& .MuiTooltip-arrow': {
                    color: '#64748b',
                  },
                },
              },
            }}
          >
            <IconButton
              href="https://wa.me/9953440143"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              sx={{
                bgcolor: '#25D366',
                color: '#ffffff',
                width: 56,
                height: 56,
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#128C7E',
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 30px rgba(37, 211, 102, 0.6)',
                },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0f1629', px: { xs: 2, md: 0 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '28px', md: '40px' },
              fontWeight: 700,
              color: '#e2e8f0',
              mb: 4,
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={7}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '16px', md: '17px' },
                  color: '#94a3b8',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {personalInfo.bio}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '16px', md: '17px' },
                  color: '#94a3b8',
                  lineHeight: 1.9,
                }}
              >
                With a proven track record of leading high-performing teams and delivering enterprise-scale solutions,
                I bring technical excellence and leadership to every project.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  bgcolor: 'rgba(20, 184, 166, 0.05)',
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#14b8a6',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 40px rgba(20, 184, 166, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationIcon sx={{ mr: 2, color: '#14b8a6', fontSize: 28 }} />
                    <Typography variant="body1" sx={{ color: '#e2e8f0', fontSize: '16px' }}>
                      {personalInfo.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon sx={{ mr: 2, color: '#14b8a6', fontSize: 28 }} />
                    <Typography variant="body1" sx={{ color: '#e2e8f0', fontSize: '16px' }}>
                      {personalInfo.phone}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 2, color: '#14b8a6', fontSize: 28 }} />
                    <Typography variant="body1" sx={{ color: '#e2e8f0', fontSize: '15px', wordBreak: 'break-all' }}>
                      {personalInfo.email}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0f1629', px: { xs: 2, md: 0 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '28px', md: '40px' },
              fontWeight: 700,
              color: '#e2e8f0',
              mb: 6,
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {Object.entries(skills).map(([category, items], index) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <Fade in timeout={1000 + index * 150}>
                  <Card
                    sx={{
                      bgcolor: 'rgba(15, 22, 41, 0.6)',
                      border: '1px solid rgba(51, 65, 85, 0.5)',
                      borderRadius: '12px',
                      boxShadow: 'none',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(20, 184, 166, 0.5)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 40px rgba(20, 184, 166, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#14b8a6',
                          textTransform: 'capitalize',
                          mb: 3,
                          fontSize: { xs: '18px', md: '20px' },
                        }}
                      >
                        {category}
                      </Typography>
                      <Grid container spacing={2}>
                        {items.map((skill, idx) => (
                          <Grid item xs={6} sm={6} key={idx}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 2,
                                borderRadius: '8px',
                                bgcolor: 'rgba(148, 163, 184, 0.05)',
                                border: '1px solid rgba(148, 163, 184, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                  bgcolor: 'rgba(20, 184, 166, 0.1)',
                                  borderColor: '#14b8a6',
                                  transform: 'translateY(-5px)',
                                  '& img': {
                                    transform: 'scale(1.1)',
                                  },
                                },
                              }}
                            >
                              <Avatar
                                src={skill.icon}
                                alt={skill.name}
                                variant="square"
                                sx={{
                                  width: { xs: 40, md: 50 },
                                  height: { xs: 40, md: 50 },
                                  mb: 1.5,
                                  transition: 'all 0.3s ease',
                                  '& img': {
                                    objectFit: 'contain',
                                  },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#cbd5e1',
                                  fontSize: { xs: '11px', md: '13px' },
                                  fontWeight: 500,
                                  textAlign: 'center',
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0a0e27', px: { xs: 2, md: 0 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '28px', md: '40px' },
              fontWeight: 700,
              color: '#e2e8f0',
              mb: 6,
            }}
          >
            Work Experience
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {experiences.map((exp, index) => (
              <Fade in timeout={1000 + index * 200} key={exp.id}>
                <Card
                  sx={{
                    mb: 4,
                    bgcolor: 'rgba(15, 22, 41, 0.6)',
                    border: '1px solid rgba(51, 65, 85, 0.5)',
                    borderRadius: '12px',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(20, 184, 166, 0.5)',
                      transform: { xs: 'translateY(-5px)', md: 'translateX(5px)' },
                      boxShadow: '0 10px 40px rgba(20, 184, 166, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#e2e8f0', mb: 1, fontSize: { xs: '18px', md: '24px' } }}>
                          {exp.position}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 500, color: '#14b8a6', mb: 1, fontSize: { xs: '16px', md: '20px' } }}>
                          {exp.company}
                        </Typography>
                      </Box>
                      <Chip
                        label={exp.period}
                        sx={{
                          bgcolor: 'rgba(20, 184, 166, 0.1)',
                          color: '#14b8a6',
                          border: '1px solid rgba(20, 184, 166, 0.3)',
                          fontWeight: 500,
                          fontSize: { xs: '11px', md: '13px' },
                        }}
                      />
                    </Box>
                    <Box sx={{ pl: { xs: 2, md: 3 } }}>
                      {exp.highlights.map((highlight, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: '#94a3b8',
                            mb: 1.5,
                            display: 'flex',
                            fontSize: { xs: '13px', md: '15px' },
                            '&:before': {
                              content: '"▹"',
                              mr: 2,
                              color: '#14b8a6',
                              fontSize: '18px',
                              flexShrink: 0,
                            },
                          }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                    {exp.projects && exp.projects.length > 0 && (
                      <Box sx={{ mt: 3, pl: { xs: 2, md: 3 } }}>
                        <Typography variant="h6" sx={{ color: '#14b8a6', fontSize: { xs: '14px', md: '16px' }, fontWeight: 600, mb: 2 }}>
                          Projects:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                          {exp.projects.map((project, pidx) => (
                            <Chip
                              key={pidx}
                              label={project.name}
                              sx={{
                                bgcolor: "#1976d2",
                                color: '#e2e8f0',
                                border: '1px solid rgba(20, 184, 166, 0.3)',
                                fontSize: { xs: '12px', md: '13px' },
                                fontWeight: 500,
                                height: 'auto',
                                py: 1,
                                '&:hover': {
                                  bgcolor: '#2196f3',
                                  borderColor: '#14b8a6',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Fade>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0f1629', px: { xs: 2, md: 0 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                color: '#14b8a6',
                fontWeight: 500,
                mb: 2,
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              What's Next?
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
                color: '#e2e8f0',
                mb: 3,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: '#94a3b8',
                mb: 5,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out!
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 5 }}>
              <Button
                variant="outlined"
                size={isMobile ? 'medium' : 'large'}
                startIcon={<EmailIcon />}
                href={`mailto:${personalInfo.email}`}
                sx={{
                  color: '#14b8a6',
                  borderColor: '#14b8a6',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 600,
                  borderRadius: '8px',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(20, 184, 166, 0.1)',
                    borderColor: '#14b8a6',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Say Hello
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
              <IconButton
                href={personalInfo.github}
                target="_blank"
                sx={{
                  color: '#94a3b8',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#14b8a6',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={personalInfo.linkedin}
                target="_blank"
                sx={{
                  color: '#94a3b8',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#14b8a6',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: '#0a0e27', borderTop: '1px solid rgba(51, 65, 85, 0.3)', px: { xs: 2, md: 0 } }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#64748b', fontSize: { xs: '13px', md: '14px' } }}>
            Designed & Built by {personalInfo.name} © {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
