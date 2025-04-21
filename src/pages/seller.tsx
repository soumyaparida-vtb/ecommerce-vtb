export default function SellerPage() {
    return (
      <div className="min-h-screen p-6 bg-gray-900">
        <h1 className="text-2xl mb-4">Seller Dashboard</h1>
        <div className="mb-6 p-4 bg-gray-800 rounded">
          <h3 className="mb-2 font-bold">Create Listing</h3>
          <input placeholder="Product Name" className="p-2 rounded w-1/3 bg-gray-700 text-white" />
          <button className="ml-2 px-3 py-1 bg-blue-600 rounded">Create</button>
        </div>
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="mb-2 font-bold">Inventory</h3>
          <table className="table-auto w-full">
            <thead><tr><th>Product</th><th>Stock</th><th>Price</th></tr></thead>
            <tbody>
              <tr><td>Product 1</td><td>20</td><td>$29.99</td></tr>
              <tr><td>Product 2</td><td>40</td><td>$19.99</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }