import React from 'react'

const Cart = () => {
  return (
    <div className='section-container'>
 <div className="py-36 flex flex-col  items-center justify-center gap-8">

{/* texts */}
<div className="px-4 space-y-7">
<h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
    Items Added to The<span className="text-green">Cart</span>
  </h2>
</div>

</div>

{/* table for the cart */}
 <div>
 <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-green text-white rounded'>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>1</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
 </div>

    </div>
  )
}

export default Cart