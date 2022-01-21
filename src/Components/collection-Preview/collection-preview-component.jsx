import React from "react";
import "./collection-preview-styles.scss";
import { CollectionItem } from "../collection-item/collection-item-component";

export const CollectionPreview = ({ article, shopItems }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{article.toUpperCase()}</h1>
      <div className="preview">
        {shopItems
          .filter((shopItems, index) => index < 4)
          .map((e) => (
            // <div key={e.id}>{e.name}</div>
            <CollectionItem key={e.id} itemsPrice={e.price} itemsName={e.name} itemsImage={e.imageUrl}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

// export const CollectionPreview = ({ items, title }) => {
//     return (
//       <div className="collection-preview">
//         <h1 className="title">{title.toUpperCase()}</h1>
//         <div className="preview">
//           {items.map((item) => (
//             <div key={item.id}>{item.name}</div>
//           ))}
//         </div>
//       </div>
//     );
//   };
