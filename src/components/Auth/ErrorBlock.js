const ErrorBlock = ({error}) => {
  if (error !== undefined)
    return (
      <div className='py-4 border-red-500 bg-red-50 text-neutral-400 text-center w-full border rounded'>{error}</div>
    );
};

export default ErrorBlock;