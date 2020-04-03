import { PixelRatio, Dimensions } from 'react-native';

export const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(Dimensions.get('window').height * elemHeight / 100);
};

export const scaledHeight = size => {
    const isString = `${ size}`;
    const index = isString.indexOf("%");
    let heightRatio = 0;
    if (index === -1) {
        heightRatio = (size * 100) / 812;
    } else {
        heightRatio = isString;
    }
    const calHeight = heightPercentageToDP(`${ heightRatio}`); // (height*heightRatio)/100
    return calHeight;
};

export const getCustomStyle = (defaultStyle = {},propStyle={})=>{
    return{
      ...defaultStyle,
      ...propStyle
    };
  };

