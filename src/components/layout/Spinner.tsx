import spinner from "../layout/assets/spinner.gif"

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading..." width={180} className="loading" />
    </div>
  )
}

export default Spinner
