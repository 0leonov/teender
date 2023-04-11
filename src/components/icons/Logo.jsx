const Logo = ({ fill, ...props }) => {
  return (
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M50 100C77.6142 100 100 77.6142 100 50C100 49.0991 99.9762 48.2037 99.9291 47.3145C99.8703 46.2025 98.2243 46.0934 97.838 47.1379C92.9027 60.4851 80.0625 70 65 70C45.67 70 30 54.33 30 35C30 19.9375 39.5149 7.09725 52.8621 2.16197C53.9066 1.77574 53.7976 0.129742 52.6855 0.0708864C51.7963 0.0238274 50.9009 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z'
      />
    </svg>
  )
}

export default Logo
