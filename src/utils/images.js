export const images = {
  logo: require("../asset/avartar.png"),
}

const getImages = (imageName) => {
  return images.logo;
};

export default getImages;

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('../', '')] = r(item); });
//   return images;
// }

// export const images = importAll(require.context('../asset', false, /\.(png|jpe?g|svg)$/));
