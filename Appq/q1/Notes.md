1. for only data fetch code below:

// ProductList.jsx

// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
//         const data = await response.json();
//         setProducts(data.data);
//         console.log(data.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {!loading && !error && (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;

-----------------------------------------------------------------------------------------------------------------------------------------------------------

2. ProductList with sorting functionality only:
// ProductList.jsx
// import React, { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sortOrder, setSortOrder] = useState("asc");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"
//         );
//         const data = await response.json();
//         setProducts(data.data);
//         console.log(data.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching data");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const sortedProducts = [...products].sort((a, b) => {
//     const order = sortOrder === "asc" ? 1 : -1;
//     return order * (a.price - b.price);
//   });

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {!loading && !error && (
//         <div>
//           <label>
//             Sort by Price:
//             <select value={sortOrder} onChange={handleSortChange}>
//               <option value="asc">Ascending</option>
//               <option value="desc">Descending</option>
//             </select>
//           </label>
//           <div style={{ display: "flex", flexWrap: "wrap" }}>
//             {sortedProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;

--------------------------------------------------------------------------------------------------------------------------------------------------------
//Productlist with sorting & filter
// ProductList.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'All' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * (a.price - b.price);
  });

  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <label>
            Sort by Price:
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
          <label>
            Filter by Category:
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="All">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Filter by Brand:
            <select value={selectedBrand} onChange={handleBrandChange}>
              <option value="All">All</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
