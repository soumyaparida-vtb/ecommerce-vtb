export default function AdminPage() {
    return (
      <div className="min-h-screen p-6 bg-gray-900">
        <h1 className="text-2xl mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="mb-2 font-bold">Approve Sellers</h3>
            <button className="mr-2 bg-green-600 px-3 py-1 rounded">Approve</button>
            <button className="bg-red-600 px-3 py-1 rounded">Reject</button>
          </div>
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="mb-2 font-bold">Listing Approval</h3>
            <button className="mr-2 bg-green-600 px-3 py-1 rounded">Approve</button>
            <button className="bg-red-600 px-3 py-1 rounded">Reject</button>
          </div>
        </div>
      </div>
    );
  }