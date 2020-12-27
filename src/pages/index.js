import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sean Washington</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mt-12 space-y-4">
        <h1 className="text-center">Hey, I'm Sean.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore a
          quod asperiores provident modi itaque unde ab ipsum. Earum nihil odit
          aperiam quisquam, delectus veritatis repellat debitis illum excepturi
          unde.
        </p>
      </main>
    </div>
  );
}
