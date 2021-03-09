import "./product.scss"

export default function Dessert(props) {
  const pageStyle = props.open ? {marginLeft: "15vw"} : {marginLeft: "10vw"}

  return (
    <div style={pageStyle} className="productPage">
      <h1>Show Desserts</h1>
      <div className="productBox">

      </div> 

      <div className="productBox">

      </div>
    </div>
  )
}