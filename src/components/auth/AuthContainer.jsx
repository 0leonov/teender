const AuthContainer = ({ children, className }) => {
  return <div className={`w-full flex flex-col gap-4 max-w-[400px] ${className}`}>{children}</div>
}

export default AuthContainer
