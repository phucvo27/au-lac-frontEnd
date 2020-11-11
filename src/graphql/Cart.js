import { fromPromise } from "@apollo/client";
import { gql } from '@apollo/client'
export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

// export function Cart() {
//   const { data, loading, error } = useQuery(GET_CART_ITEMS);

//   if (loading) return <Loading />;
//   if (error) return <p>ERROR: {error.message}</p>;

//   return (
//     <div class="cart">
//       <Header>My Cart</Header>
//       {data && data.cartItems.length === 0 ? (
//         <p>No items in your cart</p>
//       ) : (
//         <Fragment>
//           {data && data.cartItems.map(productId => (
//             <CartItem key={productId} />
//           ))}
//         </Fragment>
//       )}
//     </div>
//   );
// }