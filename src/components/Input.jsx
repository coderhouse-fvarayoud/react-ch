import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = ({ label, hint, error, icon, ...props }) => {
  return (
    <div className="flex flex-col mb-1">
      <div className="flex">
        <label className="flex items-center label-1 py-1">
          <div className="flex items-center justify-center w-6">
            <FontAwesomeIcon className="" icon={icon} size="sm" />
          </div>
          {label}
        </label>
        {error ? <span className="ml-2 text-red-500">({error})</span> : null}
      </div>
      <input
        className={`appearance-none block w-full bg-white text-gray-700 border border-shades-500 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          error ? 'border-red-500' : null
        } `}
        {...props}
      />
    </div>
  )
}

export default Input
