const PrimaryButton = ({ className, text, ...props }) => {
  return (
    <button {...props} className={`${className} btn btn-primary`}>
      {text}
    </button>
  )
}

export default PrimaryButton
