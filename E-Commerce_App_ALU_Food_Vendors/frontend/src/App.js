import React from 'react';
import data from './data';

function App() {
  return (
    
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">ALU FASTorder</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>

        </header>

        <main>
            {/* <!-- putting items next to each other by using row and center --> */}
            <div className="row center">
              {
                data.products.map((product) => (
                  <div key={product._id} className="card">
                    <a href={'./product/${product}'}>
                        {/* <!-- image size= 640px by 480px --> */}
                        <img className="medium" src={product.image} alt={product.name}/>
                    </a>
                    <div className="card-body">
                        <a href={'./product/${product._id}'}>
                            {/* <!-- Creating the name of the product --> */}
                            <h2>{product.name}</h2>
                        </a>
                        {/* <!-- Creating a rating of the product --> */}
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>                            
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>                            
                        </div>

                        {/* <!-- create price section --> */}
                        <div className="price">
                            ${product.price}
                        </div>
                    </div>
                </div>
                ))
              }



            </div>


        </main>

        <footer className="row center">
            <p>&copy;All Rights Reserved</p>

        </footer>
    </div>
  );
}

export default App;
