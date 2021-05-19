import Link from "next/link";
import { MainLayout } from "../../components/mainLayout";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Post() {
  return (
    <MainLayout>
      <h1 style={{ marginTop: 30 }}>Hello</h1>
      <hr />
      <Link href="/posts">
        <MDBBtn>Go to back</MDBBtn>
      </Link>
    </MainLayout>
  );
}
