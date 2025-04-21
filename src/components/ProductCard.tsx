export default function ProductCard() {
    return (
      <div className="bg-gray-800 rounded-lg p-4 shadow hover:shadow-xl transition">
        <div className="h-40 bg-gray-700 rounded mb-2"></div>
        <h4 className="text-lg font-bold">Product Name</h4>
        <p className="text-sm">$149.99</p>
        <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm">Add to Cart</button>
      </div>
    );
  }