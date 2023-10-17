import React from "react";
import cate1 from "../../../assets/main3_6370be21-3c2f-48a8-bb18-edc49a667081_600x.png";
import "./Category.scss";

function Category() {
  return <div className="shop-by-category">
    <div className="categories">
      <div className="category">
        <img className="img" src={cate1} alt="cate1" />
      </div>
      <div className="category">
        <img className="img" src={cate1} alt="cate1" />
      </div>
      <div className="category">
        <img className="img" src={cate1} alt="cate1" />
      </div>
      <div className="category">
        <img className="img" src={cate1} alt="cate1" />
      </div>
    </div>
  </div>
}
export default Category;

// import React from "react";
// import cate1 from "../../../assets/main3_6370be21-3c2f-48a8-bb18-edc49a667081_600x.png";
// import "./Category.scss";

// function Category({Categories}) {
//   return(<div className="shop-by-category">
//     <div className="categories">
//     {Categories.data.map((item) => (
//       <div key={item.id} className="category">
//         <img className="img" src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="cate1" />
//       </div>
//     ))}
//     </div>
//   </div>
//   );
// };
// export default Category;