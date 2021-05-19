import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
export function MainLayout({ children, title = "Next app" }) {
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    <>
      <Head>
        <meta name="keywords" content="react, nextjs" />
        <title>{title} | Hello Nextjs</title>
      </Head>
      <MDBNavbar expand="lg" light bgColor="#304FFE">
        <MDBContainer fluid>
          <Link href="/">
            <MDBNavbarBrand className="text-success" href="">
              Navbar
            </MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
            className="bg-dark"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <Link href="/">
                <MDBNavbarLink className="text-danger" href="">
                  Home
                </MDBNavbarLink>
              </Link>
              <Link href="/about">
                <MDBNavbarLink className="text-danger" href="">
                  About
                </MDBNavbarLink>
              </Link>
              <Link href="/posts">
                <MDBNavbarLink className="text-danger" href="">
                  Post
                </MDBNavbarLink>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <main>{children}</main>
    </>
  )
}
