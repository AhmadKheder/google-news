import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterBar from './FilterBar';
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

interface BottomSheetProp {
  isModalVisible: boolean;
  newsDetailes?: {title: string; description: string};
  ComponentName: string;
}

function BottomSheet(props: BottomSheetProp) {
  const {isModalVisible, newsDetailes, ComponentName} = props;
  const [isModalVisibleState, setModalVisible] = useState(isModalVisible);
  const [recievedComponent, setRecievedComponent] = useState<string>();
  const toggleModalHandler = () => {
    setModalVisible(!isModalVisible);
  };

  const Content = () => {
    switch (ComponentName) {
      case 'NewsList':
        return (
          <View style={styles.newsListData}>
            <Text style={styles.newsListTitle}>{newsDetailes?.title}</Text>
            <Text style={styles.newsListDescription}>
              {newsDetailes?.description}
            </Text>
            <TouchableOpacity style={styles.addToFavoriteIconContainer}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#FF3A44', '#ff878d']}
                style={styles.addToFavoriteIcon}>
                <View style={styles.heartPlusIcon}>
                  <MaterialCommunityIcons
                    name="heart-plus-outline"
                    size={28}
                    color="#fff"
                  />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        );
        break;
      case 'Home':
        return (
          <>
            <Text style={styles.bottomSheetTitle}>Filter</Text>
            <FilterBar
              List={['Country', 'technology', 'finance', 'arts', 'sport']}
            />
            <TouchableOpacity style={styles.saveFilterBtn}>
              <Text style={styles.saveFilterBtnTxt}>Save</Text>
            </TouchableOpacity>
          </>
        );
        break;
    }
  };

  return (
    <Modal
      isVisible={isModalVisibleState}
      onSwipeComplete={toggleModalHandler}
      swipeDirection="down"
      animationIn="slideInUp"
      animationInTiming={500}
      animationOut="slideInUp"
      style={styles.bottomSheetModal}>
      <View style={styles.bottomSheet}>
        <Text style={styles.line}></Text>
        {Content()}
      </View>
    </Modal>
  );
}

export default BottomSheet;

const styles = StyleSheet.create({
  newsListData: {
    paddingVertical: 30,
  },
  newsListTitle: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
  },
  newsListDescription: {
    fontWeight: '600',
    fontSize: 14,
    paddingVertical: 10,
  },
  addToFavoriteIconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 210,
    right: 15,
  },

  addToFavoriteIcon: {
    alignSelf: 'flex-end',
    // borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF3A44',
  },
  heartPlusIcon: {
    alignSelf: 'center',
    paddingVertical: 11,
    // paddingHorizontal: 7,
  },
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
    width: '95%',
    marginLeft: 20,
    top: 0,
    borderTopRightRadius: 50,
    // borderRadius: 25,
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
  saveFilterBtn: {
    width: SCREEN_WIDTH / 1.2,
    borderWidth: 1,
    height: 50,
    marginTop: 120,
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FF3A44',
    borderColor: '#dF3030',
  },
  saveFilterBtnTxt: {
    alignSelf: 'center',
    fontWeight: '800',
    color: '#fff',
    // borderWidth: 1,
  },
});
