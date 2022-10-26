import BulbIcon from "../icons/BulbIcon"
import DarkModeIcon from "../icons/DarkModeIcon"
import InstaIcon from "../icons/InstaIcon"
import GitHubIcon from "../icons/GitHubIcon"

import Image from "next/image"
import withLinkToURL from "../components/withLinkToURL"
import toggleDarkMode from "../lib/toggleDarkMode"

const InstaIconWithLink = withLinkToURL(InstaIcon)
const GitHubIconWithLink = withLinkToURL(GitHubIcon)

const HomePage = () => {
  return (
    <div className="dark:bg-gray-900 bg-slate-200">
      <header className="sticky top-0">
        <div
          data-outer-div
          className=" dark:bg-black/80 bg-white/80 p-2 backdrop-blur-md"
        >
          <div data-inner-div id="nav-flex-wrapper" className="container p-2">
            <div className="flex dark:text-gray-300 text-black items-center justify-start overflow-scroll">
              {/* Logo start */}
              <div
                data-logo-part
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
                <p className="absolute block top-0 transition-transform translate-y-12">
                  One that got away
                </p>
                <nav className="flex gap-4 items-center">
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
                </nav>
              </div>
              {/* Nav Menu End */}

              {/* Start - Desktop Social Menu */}
              <div className="hidden lg:flex items-center gap-8 ml-auto">
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

      <main className="container p-4">
        <Image
          src="/images/a.jpeg"
          width={1920}
          height={1080}
          alt="coming soon"
          priority
        />
        <div className="h-40 bg-blue-500" />

        <Image
          src="/images/b.jpg"
          width={1920}
          height={1080}
          alt="coming soon"
        />
        <div className="h-40 bg-blue-500" />

        <Image
          src="/images/c.jpg"
          width={1920}
          height={1080}
          alt="coming soon"
        />
        <div className="h-[150vw] bg-blue-500" />
      </main>
    </div>
  )
}

export default HomePage
