import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import NavItem from "../routes/components/NavItem";
import ROUTES from "../routes/routesModel";
import { useTheme } from "../providers/ThemeProvider";
import { useUser } from "../users/providers/UserProvider";

export default function AboutPage() {
  const { user } = useUser();
  const { isDark } = useTheme();
  return (
    <Container sx={{ color: isDark ? "white" : "black" }}>
      <PageHeader
        title="About Page"
        subtitle="Learn more about our professional business card services"
      />
      <Grid container spacing={12}>
        <Grid
          item
          xs={12}
          md={8}
          alignItems="start"
          justifyContent="space-between"
        >
          <Typography sx={{ fontSize: "25px" }}>
            Welcome to the our Cards Website!
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            <br />
            - We are dedicated to helping professionals and businesses create
            impressive and impactful business cards.
            <br />
            - Our website provides a platform to showcase the contact
            information and locations of businesses that are advertised here.
            <br />- If you want to advertise your own business, look no further!
            It's completely <strong>free!</strong> Simply{" "}
            {<NavItem to={ROUTES.SIGNUP} label="sign up here" />} to get
            started.
            <br />
            <strong>Already a user?</strong>
            <br />
            Excellent! You can customize your own professional business cards on{" "}
            {user?.isAdmin || user?.isBusiness ? (
              <NavItem to={ROUTES.MY_CARDS} label="My Cards page" />
            ) : (
              <Typography
                sx={{
                  fontSize: "17px",
                  backgroundColor: "#333333",
                  padding: "10px",
                  borderRadius: "4px",
                  color: "white",
                }}
              >
                "the My Cards page"
              </Typography>
            )}
            . You can delete or edit existing cards, as well as add your
            favorite business cards to{" "}
            {<NavItem to={ROUTES.FAV_CARDS} label="Favorites Cards" />}.
            <br />
          </Typography>

          <Typography variant="h7" component="h3">
            We are committed to helping you find the services you need and
            promote your own business! If you have any questions or need
            assistance, please don't hesitate to contact us. Our team is here to
            support you.
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: { md: "flex", xs: "block" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/assets/images/cardphoto.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
