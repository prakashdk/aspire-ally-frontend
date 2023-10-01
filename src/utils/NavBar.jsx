import React from "react";
import { Link as RouteLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <RouteLink to='/'>
            Aspir Ally
          </RouteLink>
        </p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            <RouteLink to='/goals'>
              Goals
            </RouteLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <RouteLink to='/leaderboard'>
              Leaderboard
            </RouteLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <RouteLink to='/updates'>
              Updates
            </RouteLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <RouteLink to='/about'>
              About
            </RouteLink>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="#">
            <RouteLink to='/login'>
              Login
            </RouteLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            <RouteLink to='/signup'>
              Sign Up
            </RouteLink>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
