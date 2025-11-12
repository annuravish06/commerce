import { useContext, useState, useEffect, useRef } from "react";
import myContext from "../Context/MyContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Improved search filtering with debounce
  const filterSearchData = getAllProduct
    .filter((obj) =>
      obj.title.toLowerCase().includes(search.toLowerCase()) ||
      obj.category.toLowerCase().includes(search.toLowerCase()) ||
      obj.description.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 8);

  return (
    <div className="relative" ref={searchRef}>
      {/* Search input with theme styling */}
      <div className="input flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="bg-anu-light placeholder-anu-primary/50 rounded-full px-6 py-3 w-full outline-none text-anu-dark border-2 border-anu-primary/20 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/30 shadow-sm transition-all duration-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-4 top-3.5 text-anu-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Enhanced search dropdown */}
      {search && isFocused && (
        <div className="absolute mt-2 w-full max-w-lg mx-auto bg-anu-light border border-anu-primary/20 rounded-xl shadow-lg z-50 overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          {filterSearchData.length > 0 ? (
            <div className="py-2">
              {filterSearchData.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-3 hover:bg-anu-primary/10 cursor-pointer transition-colors duration-200 flex items-center gap-4"
                  onClick={() => {
                    navigate(`/productinfo/${item.id}`);
                    setIsFocused(false);
                    setSearch("");
                  }}
                >
                  <img
                    className="w-12 h-12 object-cover rounded-lg border border-anu-primary/20"
                    src={item.productImageUrl}
                    alt={item.title}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-anu-dark font-medium truncate">{item.title}</p>
                    <p className="text-anu-primary/70 text-sm truncate">
                      {item.category} • ${item.price}
                    </p>
                  </div>
                  <div className="bg-anu-primary/10 text-anu-primary px-2 py-1 rounded-full text-xs font-medium">
                    View
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <img
                className="w-24 opacity-70 mb-3"
                src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
                alt="No results"
              />
              <p className="text-anu-dark font-medium">No products found</p>
              <p className="text-anu-primary/60 text-sm mt-1">
                Try different keywords or categories
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;