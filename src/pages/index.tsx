import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>BigDayCO | Template NextJS + Tailwindcss</title>
      </Head>
      <main className="w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full">
          <div className="rounded-full overflow-hidden relative w-36 h-36 mb-8">
            <Image src="/logo-bd.png" alt="bigday" fill />
          </div>
          <h1 className="text-7xl font-serif font-bold text-zinc-100 hover:text-white hover:drop-shadow-custom transition-all cursor-default">
            BigDay
            <small className="text-zinc-100 text-xs block font-sans font-normal mt-1">
              Intelligence and Analytics Solutions
            </small>
          </h1>

          <a
            className="text-zinc-200 font-thin text-xl mt-8 hover:drop-shadow-custom"
            href="https://bigday.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            bigday.com.br
          </a>
        </div>
        <footer className="w-full fixed inset-x-0 bottom-6 flex justify-end bg-transparent">
          <span className="text-zinc-100 font-light self-end px-8">
            {new Date().getFullYear()} &copy; BigDay | Version: 1.0
          </span>
        </footer>
      </main>
    </>
  )
}
