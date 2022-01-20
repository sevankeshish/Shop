import React from "react";
import "./shop-styles.scss";
import SHOP_DATA from "./shop-data";
import { CollectionPreview } from "../../collection-Preview/collection-preview-component";

export default class ShopPage extends React.Component {
  constructor(props) {
      console.log(props)
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
      const { collection } = this.state
    return (
        <div className="shop-page">
            {collection.map (({id, title, items}) => (
                <CollectionPreview key={id} article={title} shopItems={items}></CollectionPreview>
            ))}
        </div>
    );
  }
}

// export default class ShopPage extends React.Component {
//     constructor(props) {
//         console.log(props)
//       super(props);
//       this.state = {
//         collection: SHOP_DATA,
//       };
//     }

//     render() {
//         const { collection } = this.state
//       return (
//           <div className="shop-page">
//               {collection.map (({id, ...otherProps}) => (
//                   <CollectionPreview key={id} {...otherProps}></CollectionPreview>
//               ))}
//           </div>
//       );
//     }
//   }

// export default class ShopPage extends React.Component {
//   constructor() {
//     super();
//     this.state = [];
//   }

//   render() {
//     return (
//       <div>
//         <h1>SHOP PAGE</h1>
//       </div>
//     );
//   }
// }
