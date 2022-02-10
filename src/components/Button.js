const Button = ({ children, ...props }) => {
  return (
    <button
      className="p-2 font-bold text-white rounded-lg cursor-pointer bg-primary disabled:bg-gray-600"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
