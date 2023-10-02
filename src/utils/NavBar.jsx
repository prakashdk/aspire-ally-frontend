import React from "react";
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Switch } from "@nextui-org/react";
import { SunIcon } from "../assets/icons/SunIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";

export default function NavBar({ setTheme }) {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to='/'>
            Aspir Ally
          </NavLink>
        </p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } color="blue" to='/goals'>
            Goals
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to='/leaderboard'>
            Leaderboard
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to='/updates'>
            Updates
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to='/about'>
            About
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Switch
            defaultSelected
            size="md"
            color="primary"
            onValueChange={() => setTheme((theme) => !theme)}
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to='/login'>
            Login
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to='/signup'>
              Sign Up
            </NavLink>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
