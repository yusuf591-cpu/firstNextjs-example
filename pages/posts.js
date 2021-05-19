import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "../components/mainLayout";
import { MDBBtn } from "mdb-react-ui-kit";
import classes from "../styles/About.module.scss";
export default function Post({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const data = await response.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Post page">
      <h1 className={classes.h1}>Post page</h1>
      <Link href="/">
        <MDBBtn color="info" style={{ marginRight: 30 }}>
          Go to Home
        </MDBBtn>
      </Link>
      <Link href="/about">
        <MDBBtn color="info">Go to About</MDBBtn>
      </Link>
      <div className={classes.posts}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}

// Post.getInitialProps = async ({request}) => {
//   if (!request) {
//     return { posts: null };
//   }
//   const response = await fetch("http://localhost:4200/posts");
//   const posts = await response.json();
//   return {
//     posts,
//   };
// };

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4200/posts/");
  const posts = await response.json();
  return { props: { posts } };
}
