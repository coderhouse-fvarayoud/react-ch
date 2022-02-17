import Spinner from './Spinner'

const Button = ({ children, loading, ...props }) => {
  return (
    <button
      className="relative p-2 font-bold text-white bg-purple-600 rounded-lg cursor-pointer disabled:bg-purple-300"
      {...props}
    >
      <span className={`${loading ? 'invisible' : 'visible'}`}>{children}</span>
      {loading ? (
        <div className="absolute inset-0 ">
          <Spinner />
        </div>
      ) : null}
    </button>
  )
}

export default Button
