import * as metrics from '../../utils/metrics';

const { StyleSheet } = require('react-native');


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 90 * metrics.vw,
    backgroundColor: 'white',
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 3 * metrics.vw,
    flexDirection: 'row',
    minHeight: 12 * metrics.vh,
    paddingHorizontal: 3 * metrics.vw,
    marginVertical: 1 * metrics.vh
  },
  text: {
    color: 'black',
    width: 20 * metrics.vw,
    textAlign: 'center',
  },
  image: {
    height: 15 * metrics.vw,
    width: 15 * metrics.vw,
    resizeMode: 'contain'
  },
  productTitle: {
    color: 'black',
    width: 35 * metrics.vw,
    fontSize: 1.6 * metrics.vh
  },
  productPrice: {
    color: 'red',
    fontSize: 1.8 * metrics.vh
  },
  verticalView: {
    marginLeft: 3 * metrics.vw
  },
  counterView: {
    position: 'absolute',
    bottom: 1 * metrics.vh,
    right: - 2 * metrics.vw
  },
});
export default styles;
