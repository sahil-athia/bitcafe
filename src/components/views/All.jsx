import "./product.scss"
import classNames from 'classnames';

export default function All(props) {
  const pageStyle = props.open ? {marginLeft: "15vw"} : {marginLeft: "10vw"}
  const pageClass = classNames('productPage', {
    'productPage--light': props.light,
    'productPage--dark': props.dark
  });

  return (
    <div style={pageStyle} className={pageClass}>
      <h1 className="title">Show All Items</h1>

      <div className="productDisplay">

        <div className="productBox">
          <h2 className="productName">Example Name 1</h2>
          <p>Item details here</p>
          <button className="buyButton">Buy Now</button>
        </div> 

        <div className="productBox">
          <h2 className="productName">Example Name 2</h2>
          <p>Item details here</p>
          <button className="buyButton">Buy Now</button>
        </div>

      </div>
    </div>
  )
}