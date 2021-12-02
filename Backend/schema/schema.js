const graphql = require("graphql");
var bcrypt = require("bcrypt");
var ObjectId = require("mongodb").ObjectID;
var DeliveryAddress = require("../models/DeliveryAddress");
var Dish = require("../models/Dish");
var Favorites = require("../models/Favorites");
var OrderSummary = require("../models/OrderSummary");
var User = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} = graphql;
const DeliveryAddressType = new GraphQLObjectType({
  name: "DeliveryAddress",
  fields: () => ({
    _id: { type: GraphQLID },
    custid: { type: GraphQLID },
    address: { type: GraphQLString },
  }),
});
var DishType = new GraphQLObjectType({
  name: "Dish",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    ingredients: { type: GraphQLString },
    dishImageUrl: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});
var FavoritesType = new GraphQLObjectType({
  name: "Favorites",
  fields: () => ({
    custid: { type: GraphQLID },
    restid: { type: GraphQLID },
  }),
});

var OrderSummaryType = new GraphQLObjectType({
  name: "OrderSummary",
  fields: () => ({
    custid: { type: GraphQLID },
    restid: { type: GraphQLID },
    total: { type: GraphQLFloat },
    custName: { type: GraphQLString },
    restName: { type: GraphQLString },
    modeOfDelivery: { type: GraphQLString },
    orderStatus: { type: GraphQLString },
    address: { type: GraphQLString },
    deliveryStatus: { type: GraphQLString },
    specialInstructions: { type: GraphQLString },
    uniqueItems: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    password: { type: GraphQLString },
    DOB: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    nickname: { type: GraphQLString },
    phone: { type: GraphQLInt },
    profileUrl: { type: GraphQLInt },
    about: { type: GraphQLString },
    description: { type: GraphQLString },
    timing: { type: GraphQLString },
    modeOfDelivery: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getUserDetails: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return User.findOne({ _id: args.id })
          .then((usr) => {
            return usr;
          })
          .catch((error) => {
            console.log("error", error);
            return "No user found with this id";
          });
      },
    },
    getUserProfile: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return User.findOne({ email: args.email })
          .then((usr) => {
            return usr;
          })
          .catch((error) => {
            console.log("error", error);
            return "No user profile found";
          });
      },
    },
    getAllRests: {
      type: UserType,
      args: {
        location: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return User.find({ role: "restaurant", location: args.location })
          .then((rests) => {
            return rests;
          })
          .catch((error) => {
            console.log("error", error);
            return "No restaurant found";
          });
      },
    },
    getOrderDetails: {
      type: OrderSummaryType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return OrderSummary.findById({ _id: args.id })
          .then((order) => {
            return order;
          })
          .catch((error) => {
            console.log("error", error);
            return "No user found with this id";
          });
      },
    },
    getAllOrdersCustomer: {
      type: OrderSummaryType,
      args: {
        custid: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return OrderSummary.find({ _id: args.custid })
          .then((orders) => {
            return orders;
          })
          .catch((error) => {
            console.log("error", error);
            return "No order found for this id";
          });
      },
    },
    getAllOrdersRestaurant: {
      type: OrderSummaryType,
      args: {
        restid: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return OrderSummary.find({ _id: args.restid })
          .then((orders) => {
            return orders;
          })
          .catch((error) => {
            console.log("error", error);
            return "No order found for this id";
          });
      },
    },
    getRestAsFav: {
      type: FavoritesType,
      args: {
        restid: {
          type: GraphQLID,
        },
        custid: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Favorites.find({ restid: args.restid, custid: args.custid })
          .then((fav) => {
            return fav;
          })
          .catch((error) => {
            console.log("error", error);
            return "No user found with this id";
          });
      },
    },
    getFavs: {
      type: FavoritesType,
      args: {
        custid: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Favorites.findOne({ custid: args.custid })
          .then((fav) => {
            return fav;
          })
          .catch((error) => {
            console.log("error", error);
            return "No user found with this id";
          });
      },
    },
    getDishesforARest: {
      type: DishType,
      args: {
        restid: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Dish.find({ restid: args.restid })
          .then((dishes) => {
            return dishes;
          })
          .catch((error) => {
            console.log("error", error);
            return "No dish found for this restid";
          });
      },
    },
    getDish: {
      type: DishType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Dish.findById({ _id: args.restid })
          .then((dish) => {
            return dish;
          })
          .catch((error) => {
            console.log("error", error);
            return "No dish found with this id";
          });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    login: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return User.findOne({ email: args.email })
          .then((res) => {
            if (bcrypt.compareSync(args.password, res.password)) {
              let response = {
                id: res._id,
                role: res.role,
                email: res.email,
              };
              return response;
            } else {
              return "Please enter valid credentials";
            }
          })
          .catch((error) => {
            console.log("error", error);
            return "Please enter valid credentials";
          });
      },
    },

    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: {
          type: GraphQLString,
        },
        location: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return bcrypt
          .hash(args.password, 10)
          .then((hash) => {
            let user = new User({
              name: args.name,
              email: args.email,
              role: args.role,
              location: args.location,
              password: hash,
            });

            return User.create(user)
              .then((res) => {
                return res;
              })
              .catch((error) => {
                console.log("Error", error);
                return error;
              });
          })
          .catch((error) => {
            console.log("Some error occured while signing up", error);
            return error;
          });
      },
    },
    addDeliveryAddress: {
      type: DeliveryAddressType,
      args: {
        custid: {
          type: GraphQLID,
        },
        address: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        let da = new DeliveryAddress({
          custid: args.custid,
          address: args.address,
        });

        return DeliveryAddress.create(da)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            console.log("Error", error);
            return error;
          });
      },
    },
    addDish: {
      type: DishType,
      args: {
        restid: {
          type: GraphQLID,
        },
        name: {
          type: GraphQLString,
        },
        type: {
          type: GraphQLString,
        },
        price: {
          type: GraphQLFloat,
        },
        description: {
          type: GraphQLString,
        },

        resolve(parent, args) {
          let dish = new Dish({
            restid: args.restid,
            name: args.name,
            type: args.type,
            price: args.price,
            description: args.description,
            address: args.address,
          });

          return DeliveryAddress.create(dish)
            .then((res) => {
              return res;
            })
            .catch((error) => {
              console.log("Error", error);
              return error;
            });
        },
      },
    },
  },

  editDish: {
    type: DishType,
    args: {
      restid: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      type: {
        type: GraphQLString,
      },
      price: {
        type: GraphQLFloat,
      },
      description: {
        type: GraphQLString,
      },

      resolve(parent, args) {
        let dish = new Dish({
          restid: args.restid,
          name: args.name,
          type: args.type,
          price: args.price,
          description: args.description,
          address: args.address,
        });

        return Dish.findByIdAndUpdate(dish)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            console.log("Error", error);
            return error;
          });
      },
    },
  },

  addFavs: {
    type: FavoritesType,
    args: {
      restid: {
        type: GraphQLID,
      },
      custid: {
        type: GraphQLID,
      },

      resolve(parent, args) {
        let fav = new Dish({
          restid: args.restid,
          custid: args.name,
        });

        return Favorites.create(fav)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            console.log("Error", error);
            return error;
          });
      },
    },
  },

  addOrderDetails: {
    type: OrderSummaryType,
    args: {
      custid: {
        type: GraphQLID,
      },
      custName: {
        type: GraphQLString,
      },
      modeOfDelivery: {
        type: GraphQLString,
      },
      total: {
        type: GraphQLFloat,
      },
      specialInstructions: {
        type: GraphQLString,
      },
      restid: {
        type: GraphQLID,
      },
      address: {
        type: GraphQLString,
      },
      quantity: {
        type: GraphQLInt,
      },
      uniqueItems: {
        type: GraphQLInt,
      },

      resolve(parent, args) {
        let order = new OrderSummary({
          restid: args.restid,
          custName: args.custName,
          custid: args.custid,
          total: args.total,
          modeOfDelivery: args.modeOfDelivery,
          address: args.address,
          specialInstructions: args.specialInstructions,
          quantity: args.quantity,
          uniqueItems: args.uniqueItems,
        });

        return DeliveryAddress.create(order)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            console.log("Error", error);
            return error;
          });
      },
    },
  },

  updateOrderStatus: {
    type: OrderSummaryType,
    args: {
      orderid: {
        type: GraphQLID,
      },
      orderStatus: {
        type: GraphQLString,
      },

      resolve(parent, args) {
        let order = new OrderSummary({
          orderid: args.restid,
          orderStatus: args.custName,
        });

        return OrderSummary.updateOne(order)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            console.log("Error", error);
            return error;
          });
      },
    },
  },
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
