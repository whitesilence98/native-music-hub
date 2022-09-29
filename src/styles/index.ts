import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const normalize = (size: number) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export default {
  dimensions: {
    width,
    height,
  },

  radius: {
    button: 4,
    image: 4,
    input: 4,
    card: 4,
  },

  gutter: {
    text: 4,
    component: 8,
    container: 16,
  },

  fontFamily: {
    light: 'OpenSans',
    medium: 'OpenSans-Regular',
    regular: 'OpenSans-Regular',
    semiBold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold',
    boldItalic: 'OpenSans-BoldItalic',
    black: 'OpenSans-Black',
  },
  fontSize: {
    icon: normalize(20),
    body: normalize(14),
    body2: normalize(12),
    subTitle1: normalize(14),
    subTitle2: normalize(12),
    title: normalize(20),
    numberMini: normalize(12),
    h1: normalize(32),
    h2: normalize(28),
    h3: normalize(24),
    h4: normalize(22),
    h5: normalize(18),
    h6: normalize(16),
  },

  verticalScale,
  moderateScale,
  normalize,
  scale,
};
