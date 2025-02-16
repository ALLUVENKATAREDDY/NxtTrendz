# Nxt Trendz - Cart Features

In this project, we will implement the **Cart Features** for the **Nxt Trendz** application, applying concepts learned up until now.

### Refer to the video below:

<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4" type="video/mp4">
  </video>
</div>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>

The app must have the following functionalities:

- **Feature 1**: 
  - When an unauthenticated user tries to access the **Cart** Route, they should be navigated to the **Login** Route.
  
- **Feature 2**: 
  - When an authenticated user tries to add the same product multiple times, the quantity of the product should be updated accordingly, and the cart item count in the header should remain the same.
  
- **Feature 3**: 
  - The total amount and number of items in the cart should be displayed in the **Cart** Route.
  - When the plus icon is clicked, the quantity of the product should be incremented by one.
  - When the minus icon is clicked, the quantity of the product should be decremented by one.
  - When the quantity of the product is one and the minus icon is clicked, the respective product should be removed from the cart.
  - Based on the quantity of the product, the product price and the total cost should be updated.

- **Feature 4**: 
  - When an authenticated user clicks on the **remove** button, the respective cart item should be removed.

- **Feature 5**: 
  - When an authenticated user clicks on the **Remove All** button, all cart items should be removed, and an **Empty Cart View** should be displayed.

The `CartContext` has an object as a value with the following properties:
- `cartList`: stores the cart items.
- `removeAllCartItems`: removes all items from the cart list.
- `addCartItem`: adds a product to the cart list.
- `removeCartItem`: removes a product from the cart list.
- `incrementCartItemQuantity`: increases the quantity of a product.
- `decrementCartItemQuantity`: decreases the quantity of a product.

</details>

### Components Structure

<details>
<summary>Click to view</summary>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
</details>

### Implementation Files

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Cart/index.js`
- `src/components/Cart/index.css`
- `src/components/CartItem/index.js`
- `src/components/CartItem/index.css`
- `src/components/CartSummary/index.js`
- `src/components/CartSummary/index.css`

### Quick Tips

<details>
<summary>Click to view</summary>

- The `line-height` CSS property sets the height of a line box. It's commonly used to set the distance between lines of text:

  ```css
  line-height: 1.5;
  ```

- The `find()` array method returns the first item's value that satisfies the provided testing function. If no item is found, it returns `undefined`:

  **Syntax**: `arr.find(Testing Function)`

</details>

### Important Note

<details>
<summary>Click to view</summary>

- **Icons**: 
  - `BsPlusSquare`, `BsDashSquare` icons from `react-icons` should be used for **plus** and **minus** buttons in the cart item.
  - `AiFillCloseCircle` icon from react-icons should be used for the **remove** button in the cart item.
  
- **Test Attributes**: 
  - The Cart Item should consist of two HTML button elements with `data-testid` attribute values as **plus** and **minus**, respectively.
  - The Cart Item should consist of an HTML button element with `data-testid` attribute values as **remove**.

- **Product Image**: 
  - The product image in **Cart Item** Route should have the `alt` as the `title` of the product.

- **Prime User Credentials**:
  ```text
   username: rahul
   password: rahul@2021
  ```

- **Non-Prime User Credentials**:
  ```text
   username: raja
   password: raja@2021
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>


### Project Links

    Repository URL: https://github.com/ALLUVENKATAREDDY/NxtTrendz.git
    Published URL: https://venkatnxtrendz.ccbp.tech/