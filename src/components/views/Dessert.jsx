import "./product.scss"

export default function Dessert(props) {
  const pageStyle = props.open ? {marginLeft: "15vw"} : {marginLeft: "10vw"}

  return (
    <div style={pageStyle} className="productPage">
      <h1>Show Desserts</h1>

      <div className="productDisplay">
        
        <div className="productBox">
          <h2 className="productName">Example Name 1</h2>
        </div> 

        <div className="productBox">
          <h2 className="productName">Example Name 2</h2>
        </div>

      </div>
    </div>
  )
}