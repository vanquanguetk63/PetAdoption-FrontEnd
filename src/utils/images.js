const images = {
  logo: require("../resources/images/logo.png"),
};

const getImages = (imageName) => {
  return images[imageName];
};

export default getImages;
