import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useState} from 'react';
import {Button, Dimensions, StyleSheet, View} from 'react-native';
import {RootStackParamList} from './Types';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');
interface FavoriteProps {
  navigation: StackNavigationProp<RootStackParamList, 'Favorite'>;
}
const Favorite: React.FC<FavoriteProps> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1, width: '100%'}}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text>Home Screen</Text> */}
        <Button
          title="Go to Profile"
          onPress={() => {
            console.log('Favorit to Profile');
            navigation.navigate('Profile');
          }}
        />
      </View>
      {/*     <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        animationIn="slideInUp"
        animationInTiming={500}
        animationOut="slideInUp"
        style={styles.bottomSheetModal}>
        <View style={styles.bottomSheet}>
          <Text style={styles.line}></Text>
          <Text style={styles.bottomSheetTitle}>Filter</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal> */}
    </View>
  );
};
export default memo(Favorite);
const styles = StyleSheet.create({
  bottomSheetModal: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    top: SCREEN_HEIGHT / 2,
    bottom: 100,
    marginBottom: 500,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginHorizontal: 0,
  },
  bottomSheet: {
    position: 'absolute',

    height: SCREEN_HEIGHT,
    width: '100%',
    top: 0,
    borderRadius: 25,
    backgroundColor: '#fff',
    bottom: 400,
    marginBottom: 500,

    marginHorizontal: 0,
    paddingHorizontal: 20,
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
  bottomSheetTitle: {
    fontSize: 24,
  },
});
