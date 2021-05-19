import "./_app.js";
import { MainLayout } from "../components/mainLayout";
export default function Index() {
  return (
    <MainLayout>
      <h1>Hello Nextjs</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        laboriosam.
      </p>
      <style jsx>{`
        h1 {
          margin-top: 30px;
        }
      `}</style>
    </MainLayout>
  );
}
