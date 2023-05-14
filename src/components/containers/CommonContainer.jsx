const CommonContainer = ({ children, className }) => {
  return <div className={`w-full flex flex-col gap-4 ${className}`}>{children}</div>
}

export default CommonContainer
