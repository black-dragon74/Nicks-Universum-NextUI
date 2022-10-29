const Footer = () => {
  return (
    <footer className="p-6 text-black dark:text-white border-t border-t-gray dark:border-t-[#595959]">
      <div className="container flex flex-col gap-2 md:flex-row justify-between items-center">
        <p className="order-3 md:order-1">
          &copy; {new Date().getFullYear()} - Nick&apos;s Universum
        </p>
        <p className="order-1 md:order-1 text-2xl">🕊️</p>
        <p className="order-2 md:order-1">Built with Next.js</p>
      </div>
    </footer>
  )
}

export default Footer
