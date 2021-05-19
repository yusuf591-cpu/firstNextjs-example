import router from "next/router";
import Link from "next/link";
import { MainLayout } from "../../components/mainLayout";
import { MDBBtn } from "mdb-react-ui-kit";
import classes from "../../styles/About.module.scss";

export default function About({ data }) {
  return (
    <MainLayout title="About page">
      <h1 className={classes.h1}> {data.title}</h1>
      <Link href="/">
        <MDBBtn color="secondary" className={classes.button}>
          Go to Home
        </MDBBtn>
      </Link>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json(response);
  return { props: { data } };
}
