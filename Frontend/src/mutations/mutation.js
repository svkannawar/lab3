import { gql } from "apollo-boost";

const login = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      name
      role
      email
    }
  }
`;

const register = gql`
  mutation register(
    $name: String
    $email: String
    $password: String
    $location: String
  ) {
    register(
      name: $name
      email: $email
      password: $password
      location: $location
    ) {
      email
      role
      name
    }
  }
`;

const addDeliveryAddress = gql`
  mutation addDeliveryAddress($custid: String, $address: String) {
    addDeliveryAddress(custid: $custid, address: $address)
  }
`;
const addDish = gql`
  mutation addDish(
    $restid: ID
    $name: String
    $type: String
    $price: String
    $description: String
  ) {
    addDish(
      restid: $restid
      name: $name
      type: $type
      price: $price
      description: $description
    ) {
      restid
      name
      type
      price
      description
    }
  }
`;

const editDish = gql`
  mutation editDish(
    $restid: ID
    $name: String
    $type: String
    $price: INT
    $description: String
  ) {
    editDish(
      restid: $restid
      name: $name
      type: $type
      price: $price
      description: $description
    ) {
      restid
      name
      type
      price
      description
    }
  }
`;
const addFavs = gql`
  mutation addFavs($restid: ID, $custid: ID) {
    addFavs(groupID: $restid, userID: $custid) {
      restid
      custid
      fav
    }
  }
`;
const addOrderDetails = gql`
  mutation addDish(
    $custid: ID
    $custName: String
    $modeOfDelivery: String
    $total: INT
    $specialInstructions: String
    $restid: ID
    $address: String
    $quantity: INT
    $uniqueItems: INT
  ) {
    addDish(
      custid: $custid
      custName: $custName
      modeOfDelivery: $modeOfDelivery
      total: $total
      specialInstructions: $specialInstructions
      restid: $restid
      address: $address
      quantity: $quantity
      uniqueItems: $uniqueItems
    ) {
      custid
      custName
      modeOfDelivery
      total
      specialInstructions
      restid
      address
      quantity
      uniqueItems
    }
  }
`;

const updateOrderStatus = gql`
  mutation updateOrderStatus($orderid: ID, $orderStatus: String) {
    updateOrderStatus(orderid: $orderid, orderStatus: $orderStatus) {
      orderid
      orderStatus
    }
  }
`;

export {
  login,
  register,
  addDeliveryAddress,
  addDish,
  editDish,
  addFavs,
  addOrderDetails,
  updateOrderStatus,
};
