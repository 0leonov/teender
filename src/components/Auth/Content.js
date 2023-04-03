const Content = ({children}) => {
  return (
    <div className='h-screen px-2 container max-w-sm mx-auto flex flex-col gap-4 items-center justify-center'>
      {children}
    </div>
  );
};

export default Content;