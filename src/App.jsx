
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Stock from './components/Stock';

const products = [
  { id: 1, name: 'M18 Through Beam Sensor PNP-NO Type Sensing: 5m II Make: DOLPHIN',newstock:10,totalStock: 100, soldStock: 27, totalRevenue: 2000 ,Price:500, src:'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-2.webp?fit=600%2C600&ssl=1' },
  { id: 2, name: 'M18 Photoelectric Sensor NPN-NO Sensing: 400mm II Make: DOLPHIN',newstock:250 ,totalStock: 150, soldStock: 39, totalRevenue: 2500 ,Price:450,src:'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1.webp?fit=600%2C600&ssl=1' },
  { id: 3, name: 'Slot Sensor EE-SX674P Sn: 5mm Gap II Make: OMRON',newstock:21 ,totalStock: 250, soldStock: 50, totalRevenue: 2500 ,Price:500,src:'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/5-2.webp?fit=600%2C600&ssl=1' },
  { id: 4, name: 'Hand Swipe Sensor for Home Automation II Make: DOLPHIN',newstock:10 ,totalStock: 200, soldStock: 300, totalRevenue: 2500 ,Price:450,src:'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-12.webp?fit=600%2C600&ssl=1' },
  { id: 5, name: 'Slot Sensor EE-SX670 Sn: 5mm Gap II Make: OMRON',newstock:25 ,totalStock: 250, soldStock: 350, totalRevenue: 2500 ,Price:450,src:'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/Untitled-design-43.webp?fit=600%2C600&ssl=1' },
];


let Totalstock = 0;
let Soldstock = 0;
let Totalrevenue = 0;
let newstock = 0;

for (let i = 0; i < products.length; i++) {
Totalstock = Totalstock + products[i].totalStock
Soldstock = Soldstock + products[i].soldStock 
Totalrevenue = Totalrevenue + products[i].totalRevenue
newstock = newstock + products[i].newstock
  
}


const felds = [
  {id:1, Name:'Total Stock', value:Totalstock},
  {id:2, Name:'Sold Stock', value:Soldstock},
  {id:4 ,Name:'New Stock', value:newstock},
  {id:3 ,Name:'Total Revenue', value:Totalrevenue},
]


const App = () => {

    const [viewm, setviewm] = useState(4);
   
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Made 2 Automate Product Dashboard</h1>


      <div className=' w-full p-2 gap-4 border-2 rounded-xl overflow-clip d-2xl flex mb-6'>
      <Stock felds={felds}/>
      </div>
      
      <h1 className=' text-xl font-bold mb-3'>Produt Details</h1>
      
      <ProductList products={products} viewm = {viewm} />


<div className='w-full flex justify-center items-center'>
        <button onClick={()=>{setviewm(viewm+4)}} className=' flex justify-center w-[10vw] rounded-lg bg-slate-500  border'>View More</button>
</div>


    </div>
  );
};

export default App;
