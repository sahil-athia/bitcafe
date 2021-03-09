import "./product.scss"

export default function Coffee(props) {
  const pageStyle = props.open ? {marginLeft: "15vw"} : {marginLeft: "10vw"}

  return (
    <div style={pageStyle} className="productPage">
      <h1>Show All Coffee</h1>

      <div className="productDisplay">

        <div className="productBox">
          <h2 className="productName">Coffee #1</h2>
          <p>Item details here</p>
          <button className="buyButton">Buy Now</button>
        </div> 

        <div className="productBox">
          <h2 className="productName">Coffee #2</h2>
          <p>Item details here</p>
          <button className="buyButton">Buy Now</button>
        </div>

      </div>
    </div>
  )
}