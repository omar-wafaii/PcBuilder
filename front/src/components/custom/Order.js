import React,{useState, useEffect} from 'react';

function Order(parts) {
    const [storedUserData, setStoredUserData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderstat, setOrderStat] = useState('');
    console.log(parts);
    useEffect(() => {
        
        const storedUserDataString = localStorage.getItem('userData');
        if (storedUserDataString) {
          setStoredUserData(JSON.parse(storedUserDataString));
        }
      }, []);

    
      let calPrice = 0;
    useEffect(() => {
        
        if (parts) {
          console.log(parts.parts.length);
          for (let i=0; i < parts.parts.length;i++){
            calPrice += parts.parts[i].price_usd;
            console.log(parts.parts[i].price_usd);
          }
          setTotalPrice(calPrice.toFixed(2));
        }
      }, [parts]);
    console.log(totalPrice);
    console.log(parts.parts);
    
    const placeOrder = async (e) => {
        e.preventDefault();
        console.log(typeof parts);
        if (parts.parts.length === 0 || storedUserData== null) {
          console.log(parts);
          console.log(storedUserData);
          setOrderStat("Error: Missing required data (parts or not logged in)");
          return;
      }

        try {
          const response = await fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ parts , storedUserData}),
          });
    
          const data = await response.json();
          console.log(data);
          
          
    
          
          if (response.ok && data.message === 'Order placed successfully') {

            console.log('Order placed successfully');
            setOrderStat('Order placed successfully');
            
          } else {
            console.error('Error placing order:', data.message);
            setOrderStat('Error placing order.');
          }
        } catch (error) {
          console.error('Error placing order:', error);
        }
      };
  


  return (
    <div className='order'>
        <p>Price : {totalPrice} $</p>
        <button onClick={placeOrder}>order</button>
        <p>{orderstat}</p>

    </div>
  )
}

export default Order