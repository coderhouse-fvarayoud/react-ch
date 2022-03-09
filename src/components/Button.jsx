import Spinner from './Spinner'

const Button = ({ children, loading, className, primary = true, ...props }) => {
  return (
    <button
      className={`relative p-2 flex justify-center flex-none font-bold  ${
        primary ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-600'
      } rounded-lg cursor-pointer disabled:bg-purple-300 transition ease-in-out duration-200 hover:scale-105 ${className}`}
      {...props}
    >
      <span className={`px-3 ${loading ? 'invisible' : 'visible'}`}>
        {children}
      </span>
      {loading ? (
        <div className="absolute inset-0 text-white">
          <Spinner />
        </div>
      ) : null}
    </button>
  )
}

export default Button
