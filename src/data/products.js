export const categoriesList = [
  { id: 'blouses', name: 'Blouses', image: 'https://i.pinimg.com/236x/5f/38/51/5f3851610253a3bccd274f88b7fd91e5.jpg' },
  { id: 'salwar-suits', name: 'Salwar Suits', image: 'https://attriretails.com/wp-content/uploads/2023/06/Rupali-Fashion-Pastel-Shade-Summer-Collection-Ladies-Salwar-Suits-16005-1-1.jpg' },
  { id: 'lehengas', name: 'Lehengas', image: 'https://i.pinimg.com/736x/85/e7/32/85e7325799c92174ed7a557ea5a32220.jpg' },
  { id: 'gowns', name: 'Gowns', image: 'https://cdn.shopify.com/s/files/1/0049/3649/9315/files/GNRM0043430_NAVY_BLUE_2.jpg?v=1742543644' },
  { id: 'kurtis', name: 'Kurtis', image: 'https://houseofkari.in/cdn/shop/files/9th-feb-20245625.jpg?v=1756990145&width=1500' },
  { id: 'saree-fall-pico', name: 'Saree Fall & Pico', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-QXhQxH6o_haamhlsLBQO6P9JkDwRYdw7A&s' },
  { id: 'kidswear', name: 'Kidswear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbjnsGi4P_XEfsgE-TKBH0Wc6XagXnlKiSw&s' },
  { id: 'custom-designer', name: 'Custom Designer Outfits', image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80' },
  { id: 'alterations', name: 'Alterations & Fittings', image: 'https://images.unsplash.com/photo-1596783074918-c84cb1f80d75?auto=format&fit=crop&q=80' },
  { id: 'mom-and-kids', name: 'MOM & Kids', image: 'https://images.unsplash.com/photo-1585218356057-dc088d6cebe9?auto=format&fit=crop&q=80' },
];

export const products = [
  // Blouses
  { id: 1, name: 'Bridal Heavily Embroidered Blouse', category: 'blouses', price: 3500, sizes: ['S', 'M', 'L'], fabric: 'Silk', img: 'https://i.pinimg.com/236x/5f/38/51/5f3851610253a3bccd274f88b7fd91e5.jpg', desc: 'Custom tailored bridal blouse with Aari work.' },
  { id: 2, name: 'Sleeveless Contemporary Blouse', category: 'blouses', price: 1200, sizes: ['S', 'M', 'L', 'XL'], fabric: 'Cotton', img: 'https://i.pinimg.com/236x/c2/c1/03/c2c1037a51fe7f3f7d2b0ef02bb9107b.jpg', desc: 'Modern sleeveless design perfect for parties.' },
  { id: 3, name: 'Traditional Maggam Work Blouse', category: 'blouses', price: 4200, sizes: ['M', 'L'], fabric: 'Raw Silk', img: 'https://e1.pxfuel.com/desktop-wallpaper/885/215/desktop-wallpaper-back-side-blouse-design.jpg', desc: 'Incredible detail and craftsmanship.' },
  
  // Salwar Suits
  { id: 4, name: 'Pastel Designer Salwar Suit', category: 'salwar-suits', price: 2500, sizes: ['M', 'L', 'XL'], fabric: 'Georgette', img: 'https://attriretails.com/wp-content/uploads/2023/06/Rupali-Fashion-Pastel-Shade-Summer-Collection-Ladies-Salwar-Suits-16005-1-1.jpg', desc: 'Elegant pastel salwar suit with side slit.' },
  { id: 5, name: 'Punjabi Anarkali Suit', category: 'salwar-suits', price: 3800, sizes: ['S', 'M', 'L'], fabric: 'Chiffon', img: 'https://thenmozhidesigns.com/cdn/shop/files/3S2A1267.jpg?v=1738382636&width=4000', desc: 'Classic Anarkali style perfect for weddings.' },
  { id: 6, name: 'Casual Cotton Salwar', category: 'salwar-suits', price: 1500, sizes: ['S', 'M', 'L', 'XL', 'XXL'], fabric: 'Cotton', img: 'https://cdn.shopaccino.com/tacfab/products/310857_l.jpg?v=691', desc: 'Comfortable everyday wear salwar suit.' },
  { id: 61, name: 'Embroidered Silk Salwar', category: 'salwar-suits', price: 4200, sizes: ['S', 'M', 'L'], fabric: 'Silk', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhb66aeEpHyyVQ496WPboLx85xV6nf6EfFw&s', desc: 'Festive red silk suit.' },

  // Lehengas
  { id: 7, name: 'Velvet Bridal Lehenga', category: 'lehengas', price: 15000, sizes: ['Custom'], fabric: 'Velvet', img: 'https://i.pinimg.com/736x/85/e7/32/85e7325799c92174ed7a557ea5a32220.jpg', desc: 'Luxurious velvet with intricate Zari work.' },
  { id: 8, name: 'Floral Net Lehenga', category: 'lehengas', price: 8500, sizes: ['M', 'L'], fabric: 'Net', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSG3QM5MlNt_5FCWx6vrotoR0dCzoTES1TDA&s', desc: 'Lightweight floral lehenga for daytime events.' },
  { id: 81, name: 'Banarasi Silk Lehenga', category: 'lehengas', price: 12500, sizes: ['Custom'], fabric: 'Banarasi', img: 'https://www.meerasplussizestore.com/cdn/shop/files/Green-Net-Chunni-_aksansha_-SCL_0300_21f635d6-ae0e-4f84-b6fa-811135d86808.jpg?v=1748605593&width=2000', desc: 'Traditional Banarasi weave.' },

  // Gowns
  { id: 9, name: 'Western Evening Gown', category: 'gowns', price: 6500, sizes: ['S', 'M'], fabric: 'Satin', img: 'https://cdn.shopify.com/s/files/1/0049/3649/9315/files/GNRM0043430_NAVY_BLUE_2.jpg?v=1742543644', desc: 'Floor-length sleek satin evening gown.' },
  { id: 10, name: 'Indo-Western Fusion Gown', category: 'gowns', price: 7200, sizes: ['M', 'L', 'XL'], fabric: 'Georgette', img: 'https://taruni.in/cdn/shop/files/TWFIW215_2.jpg?v=1734501925&width=2048', desc: 'The perfect blend of tradition and modernity.' },

  // Kurtis
  { id: 11, name: 'Embroidered Long Kurti', category: 'kurtis', price: 1100, sizes: ['S', 'M', 'L', 'XL'], fabric: 'Cotton', img: 'https://houseofkari.in/cdn/shop/files/9th-feb-20245625.jpg?v=1756990145&width=1500', desc: 'Daily wear long kurti with thread embroidery.' },
  { id: 12, name: 'Festive Silk Kurti', category: 'kurtis', price: 2100, sizes: ['M', 'L'], fabric: 'Silk', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6HG55QcpTpoZaXnCVAnpiHYkr3UIFLygYA&s', desc: 'Shimmering silk kurti for small gatherings.' },

  // Kidswear
  { id: 13, name: 'Little Princess Frock', category: 'kidswear', price: 1800, sizes: ['Custom'], fabric: 'Net & Silk', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbjnsGi4P_XEfsgE-TKBH0Wc6XagXnlKiSw&s', desc: 'A beautiful tailored frock for your little one.' },
  { id: 131, name: 'Kids Ethnic Lehenga', category: 'kidswear', price: 2400, sizes: ['Custom'], fabric: 'Cotton Silk', img: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/FEBRUARY/5/LFlUyLiU_c10b2cc8e99143cd90f68b34d9675dd5.jpg', desc: 'Comfortable traditional wear for kids.' },
  
  // Custom Designer
  { id: 14, name: 'Bespoke Cocktail Dress', category: 'custom-designer', price: 12000, sizes: ['Custom'], fabric: 'Premium Blends', img: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80', desc: 'A dress made entirely from scratch specifically for your body.' },
  { id: 141, name: 'Designer Wrap Dress', category: 'custom-designer', price: 8500, sizes: ['Custom'], fabric: 'Crepe', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80', desc: 'Elegant wrap dress customized to your length.' },

  // Alterations
  { id: 15, name: 'Dress Resizing & Fitting', category: 'alterations', price: 500, sizes: ['Custom'], fabric: 'Any', img: 'https://images.unsplash.com/photo-1596783074918-c84cb1f80d75?auto=format&fit=crop&q=80', desc: 'Expert fittings to make your existing clothes look tailored.' },
  { id: 151, name: 'Zipper & Button Replacement', category: 'alterations', price: 250, sizes: ['Custom'], fabric: 'Any', img: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80', desc: 'Quality hardware replacement for your favorite garments.' },

  // MOM & Kids
  { id: 16, name: 'Matching Mom & Daughter Salwar', category: 'mom-and-kids', price: 4500, sizes: ['Custom'], fabric: 'Georgette', img: 'https://images.unsplash.com/photo-1585218356057-dc088d6cebe9?auto=format&fit=crop&q=80', desc: 'Adorable matching outfits tailored together.' },
  { id: 161, name: 'Family Festive Collection', category: 'mom-and-kids', price: 8500, sizes: ['Custom'], fabric: 'Silk', img: 'https://images.unsplash.com/photo-1610444360359-57ef9a589fdf?auto=format&fit=crop&q=80', desc: 'Coordinated outfits for special occasions.' },

  // Saree Fall & Pico
  { id: 17, name: 'Standard Saree Fall & Pico', category: 'saree-fall-pico', price: 150, sizes: ['Standard'], fabric: 'Cotton Fall', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-QXhQxH6o_haamhlsLBQO6P9JkDwRYdw7A&s', desc: 'Quick and clean finishing for your new sarees.' },
  { id: 171, name: 'Premium Heavy Saree Prep', category: 'saree-fall-pico', price: 350, sizes: ['Standard'], fabric: 'Silk Fall', img: 'https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-seagreen-zariwork-net-designer-saree-saus0032174_seagreen__5.jpg?v=1748424845', desc: 'Specialized reinforced fall matching for heavy bridal sarees.' },
];
