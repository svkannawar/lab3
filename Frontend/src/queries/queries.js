import { gql } from "apollo-boost";
const getAllRests = gql`
  query getAllRests($location: String) {
    getAllRests(location: $location) {
      _id
      name
      location
      description
      modeOfDelivery
      phone
      timing
      profileUrl
    }
  }
`;
const getUserProfile = gql`
  query getUserProfile($id: ID) {
    getUserProfile(id: $id) {
      name
      location
      phone
      profileUrl
      DOB
      nickname
      state
      country
      about
    }
  }
`;
const getOrderDetails = gql`
  query getOrderDetails($id: ID) {
    getOrderDetails(id: $id) {
      custid
      restid
      custName
      restName
      modeOfDelivery
      orderStatus
      address
      deliveryStatus
      dishes
      uniqueIems
      quantity
      specialInstructions
    }
  }
`;
const getAllOrdersCustomer = gql`
  query getAllOrdersCustomer($custid: ID) {
    getAllOrdersCustomer(custid: $custid) {
      custid
      restid
      custName
      restName
      modeOfDelivery
      orderStatus
    }
  }
`;

const getAllOrdersRestaurant = gql`
  query getAllOrdersRestaurant($custid: ID) {
    getAllOrdersRestaurant(custid: $custid) {
      custid
      restid
      custName
      restName
      modeOfDelivery
      orderStatus
    }
  }
`;

const getRestAsFav = gql`
  query getRestAsFav($custid: ID, $restid: ID) {
    getRestAsFav(custid: $custid, restid: $restid) {
      fav
    }
  }
`;

const getFavs = gql`
  query getFavs($custid: ID, $restid: ID) {
    getFavs(custid: $custid, restid: $restid) {
      custid
      restid
    }
  }
`;

const getDish = gql`
  query getDish($id: ID) {
    getDish(restid: $restid) {
      id
      restid
      name
      ingredients
      dishImageUrl
      price
      description
      category
      type
    }
  }
`;
export {
  getAllRests,
  getUserProfile,
  getOrderDetails,
  getAllOrdersCustomer,
  getAllOrdersRestaurant,
  getRestAsFav,
  getFavs,
  getDish,
};
