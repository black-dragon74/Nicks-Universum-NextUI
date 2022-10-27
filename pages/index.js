import BulbIcon from '../icons/BulbIcon'
import DarkModeIcon from '../icons/DarkModeIcon'
import InstaIcon from '../icons/InstaIcon'
import GitHubIcon from '../icons/GitHubIcon'

import withLinkToURL from '../components/withLinkToURL'
import toggleDarkMode from '../lib/toggleDarkMode'
import useToggle from '../hooks/useToggle'
import PostCard from '../ui/PostCard'
import Head from 'next/head'

const InstaIconWithLink = withLinkToURL(InstaIcon)
const GitHubIconWithLink = withLinkToURL(GitHubIcon)

const HomePage = () => {
  const [postTitle, togglePostTitle] = useToggle()

  return (
    <>
      <Head>
        <title>Nick&apos;s Universum - Beta</title>
      </Head>
      <div className="dark:bg-white bg-slate-200">
        <header className="sticky top-0 z-50 dark:text-gray-300 text-black">
          <div
            data-outer-div
            className=" dark:bg-black/80 bg-white/80 backdrop-blur-md"
          >
            <div data-inner-div id="nav-flex-wrapper" className="container p-2">
              <div className="flex  items-center justify-start overflow-scroll">
                {/* Logo start */}
                <div
                  data-logo-part
                  onClick={togglePostTitle}
                  className="flex items-center mr-8 shrink-0 hover:text-gray-400 ease-in-out transition-colors duration-300 cursor-pointer"
                >
                  <BulbIcon className="w-8 h-8 mr-2" />
                  <div className="flex flex-col gap-0">
                    <p>Nick&apos;s Universum</p>
                    <small>Veni. Vidi. Vici.</small>
                  </div>
                </div>
                {/* Logo end */}

                {/* Nav Menu Start */}
                <div className="relative overflow-hidden shrink-0">
                  <p
                    className={`absolute block top-0 transition-transform duration-200 ${
                      !postTitle && 'translate-y-12'
                    }`}
                  >
                    One that got away
                  </p>
                  <nav
                    className={`flex gap-4 items-center transition-transform duration-200 ${
                      postTitle && '-translate-y-12'
                    }`}
                  >
                    <a
                      href="#"
                      className="hover:text-gray-400 ease-in-out transition-colors duration-300"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="hover:text-gray-400 ease-in-out transition-colors duration-300"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="hover:text-gray-400 ease-in-out transition-colors duration-300"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="hover:text-gray-400 ease-in-out transition-colors duration-300"
                    >
                      Portfolio
                    </a>
                    <div className="w-24 md:hidden" />
                  </nav>
                </div>
                {/* Nav Menu End */}

                {/* Start - Desktop Social Menu */}
                <div className="hidden md:flex items-center gap-8 ml-auto">
                  <InstaIconWithLink className="w-6 h-6" href="/" />
                  <GitHubIconWithLink className="w-6 h-6" href="/" />
                  <DarkModeIcon
                    className={`w-6 h-6 cursor-pointer hover:text-gray-400 ease-in-out transition-all duration-300 hover:rotate-180`}
                    onClick={toggleDarkMode}
                  />
                </div>
                {/* End - Desktop Social Menu */}
              </div>
            </div>
          </div>
        </header>

        <div className="h-48 md:h-64 p-2 bg-white/80 dark:bg-black dark:text-gray-300">
          <div className="h-full flex gap-4 justify-center items-center">
            <BulbIcon className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-semibold">
                Nick&apos;s Universum
              </span>
              <p className="font-thin text-xl">Thoughts, stories and ideas.</p>
            </div>
          </div>
        </div>

        <main className="container">
          <div
            id="article-container"
            className="flex flex-wrap pt-10 pb-[5vw] bg-white"
          >
            {[...Array(30).keys()].map((_, i) => (
              <PostCard key={i} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
