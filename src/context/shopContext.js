import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "graphql.myspotify.com",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test",
  };

  render() {
    return (
      <div>
        <ShopContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </ShopContext.Provider>
      </div>
    );
  }
}

const ShopeConsumer = ShopContext.Consumer;
export { ShopeConsumer, ShopContext };

export default ShopProvider;
