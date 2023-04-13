const Form = ({ children, ...props }) => {
  return (
    <form className='w-full p-4 py-6 border rounded-box flex flex-col gap-4 items-stretch' {...props}>
      {children}
    </form>
  )
}

export default Form
