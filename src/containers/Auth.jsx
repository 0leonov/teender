const Auth = ({ children, ...props }) => {
  return (
    <div className='max-w-sm flex min-h-screen flex-col justify-center gap-4 items-center mx-auto p-6 prose select-none' {...props}>
      {children}
    </div>
  )
}

export default Auth
