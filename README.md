
# ⚡ Electronics Store

A modern and responsive Electronics E-commerce Website built using React.js, Tailwind CSS, React Router DOM, and Redux Toolkit.

Explore the latest electronic products, add products to your shopping cart, manage quantities, and track recently viewed products with a clean and user-friendly interface.

## 🚀 Features

### 🏠 Home Page
- Modern and attractive hero section.
- Shop Now and Explore Products buttons.
- Popular product categories.
- Why Choose Us section.
- Responsive design.

### 🛍️ Shop Page
- Display multiple electronic products.
- Dynamic product cards using React Props.
- Product name, image, category, price, and rating.
- Add To Cart functionality.
- Responsive product grid.

### 🛒 Shopping Cart
- Add products to cart.
- Increase and decrease product quantity.
- Remove products from cart.
- Automatically calculate total items.
- Automatically calculate total price.
- Empty cart message.
- Order summary section.

### 📜 History Page
- Display recently viewed products.
- Add products to cart from history.
- Remove individual products from history.
- Clear complete browsing history.
- Prevent duplicate history entries.

### 🧭 Navigation
- React Router DOM for internal routing.
- Home, Shop, History, and Cart pages.
- Lucide React icons.
- Cart item count in Navbar.

### 📱 Responsive Design
- Mobile-friendly layout.
- Tablet and desktop support.
- Modern UI with Tailwind CSS.

## 🛠️ Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- Redux Toolkit
- React Redux
- React Router DOM
- Lucide React
- Vite

## 📂 Project Structure

```text
Electronics-Store/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ShopPage.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── Cart.jsx
│   │   └── History.jsx
│   │
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── cartSlice.js
│   │   │   └── historySlice.js
│   │   │
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Folder

```bash
cd Electronics-Store
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Required Packages

```bash
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
npm install lucide-react
```

### 5. Run the Project

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react | UI development |
| react-dom | Rendering React components |
| react-router-dom | Page navigation |
| @reduxjs/toolkit | State management |
| react-redux | Redux integration |
| lucide-react | UI icons |
| tailwindcss | Styling |

## 🔄 Redux State Management

Redux Toolkit is used to manage global application state.

### Cart Slice

- addToCart
- removeFromCart
- increaseQuantity
- decreaseQuantity

### History Slice

- addToHistory
- removeFromHistory
- clearHistory

Redux Store manages both Cart and History states centrally.

## 🌐 Application Routes

| Route | Page |
|---|---|
| `/` | Home Page |
| `/shop` | Shop Page |
| `/cart` | Cart Page |
| `/history` | History Page |

## 🎨 UI Design

- Primary Background: Slate 950
- Accent Color: Yellow 400
- Text Color: White / Gray
- Clean product cards.
- Modern navigation bar.
- Responsive layouts.

## 🔮 Future Improvements

- User Authentication.
- Product Search Functionality.
- Category Filtering.
- Wishlist Functionality.
- Product Details Page.
- Checkout and Payment Integration.
- Backend API Integration.
- Database Integration.
- Persistent Cart and History using Local Storage.

## 👨‍💻 Author

**Kartik Porwal**

Aspiring Software Developer | MERN Stack Developer

- GitHub: https://github.com/Kartikporwal
- Portfolio: Add your portfolio URL here
- LinkedIn: Add your LinkedIn profile URL here

---

⭐ If you like this project, don't forget to give it a star!
