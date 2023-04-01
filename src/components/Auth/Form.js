const Form = ({onSubmit, children}) => {
  return (
    <form onSubmit={onSubmit} className='w-full p-6 border border-purple-100 rounded bg-white flex flex-col gap-4'>
      {children}
    </form>
  );
};

export default Form;