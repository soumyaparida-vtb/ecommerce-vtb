import ProductCard from '@/components/ProductCard';
import CategorySidebar from '@/components/CategorySidebar';

export default function UserPage() {
  return (
    <div className="flex min-h-screen">
      <CategorySidebar />
      <main className="flex-1 p-6 bg-gray-900">
        <div className="mb-4">
          <input type="text" placeholder="Search" className="p-2 rounded bg-gray-700 w-2/3" />
          <button className="ml-2 px-4 py-2 bg-blue-600 rounded">Search</button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((id) => <ProductCard key={id} />)}
        </div>
      </main>
    </div>
  );
}