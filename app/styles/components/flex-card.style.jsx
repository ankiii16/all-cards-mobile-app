import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (variant=100) => ({
    backgroundColor: 'green',
    height: variant,
  }),
  detailContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderRadius: 20,
  },
  postImage: {
    width: 100,
  },
  postTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
});
