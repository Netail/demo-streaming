import { Suspense } from "react";

const Todos = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return (
    <ol>
      <li>Write a blog post</li>
      <li>Drink water</li>
    </ol>
  );
}

const Page = () => {
  return (
    <>
      <h1>Todos:</h1>
      <Suspense fallback={<p>loading...</p>}>
        <Todos />
      </Suspense>
    </>
  );
}

export default Page;
