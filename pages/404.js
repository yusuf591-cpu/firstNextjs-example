import { MDBBtn } from "mdb-react-ui-kit";
import classes from "../styles/error.module.scss"
import Link from "next/link";
export default function Errorpage() {
  return (
    <>
      <div className="Error">
        <h1 className={classes.h1}>Error 404 </h1> <p className={classes.p}>Please go back to Home page</p>
        <Link href="/">
          <MDBBtn color="info">Go to Home</MDBBtn>
        </Link>
        <style jsx>{`
          text-align: center;
        `}</style>
      </div>
    </>
  );
}
