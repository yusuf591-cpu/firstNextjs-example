import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/mainLayout";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();
  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);
  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1 style={{ marginTop: 30 }}>{post.title}</h1>
      <hr />
      <p>{post.text}</p>
      <Link href="/posts">
        <MDBBtn>Go to back</MDBBtn>
      </Link>
    </MainLayout>
  );
}

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//   return {
//     post,
//   };
// };

export async function getServerSideProps({ query }) {
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return { props: post };
}
