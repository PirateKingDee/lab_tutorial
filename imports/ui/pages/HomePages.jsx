import React, {PropTypes, Component} from 'react';
//convert link to <a>
import { Link } from 'react-router';


export default class HomePage extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg" />
              <h2 className="text-center">Cali Yogo</h2>
              <div className="text-center">
                <Link to='/cali_yogo-strawberry'>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/products/salt/mango/0.png" />
              <h2 className="text-center">Mango</h2>
            </div>
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/eliquids/milkshake_liquids-apple_shake.png" />
              <h2 className="text-center">Apple Shake</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/eliquids/modzilla-_nuclear_fruit_punch.png" />
              <h2 className="text-center">Modzilla</h2>
            </div>
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/eliquids/steep_vapors-pop_deez.png" />
              <h2 className="text-center">Pop Deez</h2>
            </div>
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/photos/Binary_E_Liquid-Pow.jpg" />
              <h2 className="text-center">Pow</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/photos/high_voltage_vaporz-diode.jpg" />
              <h2 className="text-center">DIODE</h2>
            </div>
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/eliquids/mother_nature_vapor-sweet_keffir_lime.jpg" />
              <h2 className="text-center">SWEET KEFFIR LIME</h2>
            </div>
            <div className="col-sm-4">
              <img className="img-responsive" src="https://swchllc.s3.amazonaws.com/eliquids/rich__famous-_atomic_berry.png" />
              <h2 className="text-center">Atomic Berry</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
