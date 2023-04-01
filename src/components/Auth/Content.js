const Content = ({children}) => {
  return (
    <div className='pt-24 px-2 container max-w-sm mx-auto flex flex-col gap-4 items-center'>
      {children}
    </div>
  );
};

export default Content;