import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loader = () => {
  return (
    <div className="text-purple-600 w-full pt-20 flex justify-center items-center">
      <FontAwesomeIcon icon={faSpinner} size="3x" spin />
    </div>
  )
}

export default Loader
