
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingAddressScreen = (props) => {
    const userSignin= useSelector (state=>state.userSignin);
    const {userInfo}=userSignin;
    if (!userInfo){
        props.history.push('/signin');
    }

    const cart=useSelector (state=>state.cart);
    const {shippingAddress} = cart;


    const [fullname, setFullName] = useState(shippingAddress.fullname);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();


    const submitHandler= (e)=> {
        e.preventDefault();
        dispatch (saveShippingAddress({fullname, address, city, postalCode, country}));
        props.history.push ('/payment');

       

    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className= "form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                    type='text'
                    id="fullname"
                    placeholder="Enter full name"
                    value={fullname}
                    onChange={(e)=>setFullName(e.target.value)}
                    required>
                    </input>

                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                    type='text'
                    id="address"
                    placeholder="Enter Your Address"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    required>
                    </input>

                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input
                    type='text'
                    id="city"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    required>
                    </input>

                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                    type='text'
                    id="postalCode"
                    placeholder="Enter Postal Code"
                    value={postalCode}
                    onChange={(e)=>setPostalCode(e.target.value)}
                    required>
                    </input>

                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                    type='text'
                    id="country"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    required>
                    </input>

                </div>

                <div>
                    <label/>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
            
        </div>
    );
}

export default ShippingAddressScreen;
