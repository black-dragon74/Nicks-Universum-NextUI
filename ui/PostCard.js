import Image from 'next/image'

const PostCard = () => {
  return (
    <article className="relative p-6 flex flex-col grow shrink basis-1/1 md:basis-1/2 xl:basis-1/3 min-h-[220px]">
      {/* Treat this div as an image tag, because we are using fill on next/image */}
      <div className="relative h-[250px] lg:h-[200px] w-full overflow-hidden">
        <Image
          src="/images/c.jpg"
          fill
          alt="ayega"
          className="rounded-md object-cover"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>

      <header className="mt-4 mb-2">
        <p className="uppercase text-sm text-blue-400 mb-1">
          🌻 Getting started
        </p>
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 line-cla">
          She will be loved 🥀
        </h1>
      </header>

      <section>
        <p className="text-gray-500 dark:text-gray-300 text-left mb-2 line-clamp-3">
          I will just keep writing random shit till this content spans across
          multiple lines. I think this much of content excerpt is enough. Lines
          more than 3 will be truncated.
        </p>
      </section>

      <footer className="flex gap-2 items-center">
        <div className="h-10 w-10 rounded-full text-center leading-9 bg-pink-400">
          <span className="text-3xl">🐯</span>
        </div>
        <div className="flex flex-col">
          <p className="uppercase font-medium text-gray-700 dark:text-gray-400">
            Author
          </p>
          <small className="uppercase text-gray-500 dark:text-gray-300">
            07 sep 1998 • 3 min read
          </small>
        </div>
      </footer>
    </article>
  )
}

export default PostCard
