const PrimaryButton = ({ className, text, isLoading, ...props }) => {
  return (
    <button {...props} className={`${className} btn btn-primary ${isLoading ? 'loading' : ''}`}>
      {text}
    </button>
  )
}

export default PrimaryButton
