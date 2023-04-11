const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className='w-full p-4 py-6 border rounded-box flex flex-col gap-4 items-stretch'>
      {children}
    </form>
  )
}

export default Form
