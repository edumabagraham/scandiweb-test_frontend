
type ChildrenProps = {
    children:React.ReactNode
}
function  Card({children}:ChildrenProps){
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card
