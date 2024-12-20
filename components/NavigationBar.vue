<template>
  <Navbar expand="lg" background-color="body-tertiary">
    <Container type="fluid">
      <NavbarBrand>My1RM Calculator</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>

        <NavbarNavList margin="e-auto b-2 b-lg-0">
          <NavItem>
            <NavLink>
              <router-link to="/">1RM</router-link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <router-link to="/about">About</router-link>
            </NavLink>
          </NavItem>
        </NavbarNavList>

        <!-- <BForm flex role="search">
          <BFormInput margin="e-2" type="search" placeholder="Search" />
          <b-button color="outline-success" type="submit">
            Search
          </b-button>
        </BForm> -->
      </NavbarCollapse>
    </Container>




    <!--
    <div id="nav">
      <router-link to="/">1RM</router-link> |

    </div> -->
  </Navbar>
</template>
