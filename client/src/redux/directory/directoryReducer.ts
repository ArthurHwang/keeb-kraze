import { AnyAction } from "redux";

const INITIAL_STATE = {
  sections: [
    {
      title: "keyboards",
      imageUrl:
        "https://live.staticflickr.com/5826/30295544320_68b9b0d6b5_b.jpg",
      id: 1,
      linkUrl: "shop/keyboards",
      size: "large"
    },
    {
      title: "keycaps",
      imageUrl:
        "https://i.pinimg.com/originals/93/6a/fc/936afc46bac9f85de22966c88677217d.jpg",
      id: 2,
      linkUrl: "shop/keycaps",
      size: "large"
    },
    {
      title: "switches",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/3099/8088/products/Gateron_Silent_Red_1024x1024@2x.jpg?v=1558704648",
      id: 3,
      linkUrl: "shop/switches",
      size: "large"
    },
    {
      title: "accessories",
      imageUrl:
        "https://images.idgesg.net/images/article/2018/07/img_20180706_202831-100764491-large.jpg",

      id: 4,
      linkUrl: "shop/accessories"
    },
    {
      title: "parts",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1674/0405/products/sp111_plate_768x.png?v=1575664053",
      // size: "large",
      id: 5,
      linkUrl: "shop/parts"
    }
  ]
};

export const directoryReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
