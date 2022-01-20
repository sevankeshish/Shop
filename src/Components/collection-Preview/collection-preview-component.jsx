import React from "react";
import "./collection-preview-styles.scss";

export const CollectionPreview = ({ article, shopItems }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{article.toUpperCase()}</h1>
      <div className="preview">
        {shopItems.map((e) => (
          <div key={e.id}>{e.name}</div>
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
