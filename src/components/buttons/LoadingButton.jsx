const LoadingButton = ({ className, text, ...props }) => {
  return (
    <button {...props} className={`${className} btn loading`}>
      {text}
    </button>
  )
}

export default LoadingButton
