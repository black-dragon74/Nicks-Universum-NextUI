function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const withLinkToURL = WrappedComponent => {
  const InnerComponent = ({ href, ...props }) => {
    return (
      <a
        href={href}
        className="hover:text-gray-400 ease-in-out transition-colors duration-300"
      >
        <WrappedComponent {...props} />
      </a>
    )
  }

  InnerComponent.displayName = `withLinkToURL(${getDisplayName(
    WrappedComponent
  )})`

  return InnerComponent
}

export default withLinkToURL
