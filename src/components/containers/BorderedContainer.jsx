const BorderedContainer = ({ children, ...props }) => {
  return (
    <form className='flex flex-col gap-4 border rounded-box py-6 px-4' {...props}>
      {children}
    </form>
  )
}

export default BorderedContainer
