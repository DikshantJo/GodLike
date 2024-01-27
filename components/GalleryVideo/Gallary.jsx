import Head from 'next/head';

export default function Home() {
  return (
    <div className=" min-h-[80vh] flex items-center justify-center">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming Soon Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We are working on something awesome!
        </p>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md ml-2">
            Notify Me
          </button>
        </div>
      </main>
    </div>
  );
}
