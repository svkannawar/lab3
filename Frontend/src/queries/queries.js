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
  query getUserProfile($id: String) {
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
  query getOrderDetails($id: String) {
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
  query getAllOrdersCustomer($custid: String) {
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
  query getAllOrdersRestaurant($custid: String) {
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
  query getRestAsFav($custid: String, $restid: String) {
    getRestAsFav(custid: $custid, restid: $restid) {
      fav
    }
  }
`;

const getFavs = gql`
  query getFavs($custid: String, $restid: String) {
    getFavs(custid: $custid, restid: $restid) {
      custid
      restid
    }
  }
`;

const getDish = gql`
  query getDish($id: String) {
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
