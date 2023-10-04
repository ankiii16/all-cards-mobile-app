import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cardContent: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 2,
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"black"
  },
  cardText: {
    fontSize: 16,
    marginTop: 8,
  },
  roundedButton: {
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 
