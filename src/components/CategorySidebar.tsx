const categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Gadgets'];

export default function CategorySidebar() {
  return (
    <aside className="w-64 bg-gray-850 p-6 text-white border-r border-gray-700">
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat} className="hover:underline cursor-pointer">{cat}</li>
        ))}
      </ul>
    </aside>
  );
}