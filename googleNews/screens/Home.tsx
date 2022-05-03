import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Context from '../Components/Context';
import FilterBar from '../Components/FilterBar';
import NewsList from '../Components/NewsList';
import {RootStackParamList} from './Types';

const Stack = createNativeStackNavigator();

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const getAllNews = () => {
  const URL =
    'https://gnews.io/api/v4/search?q=example&token=724acfa9fa5e46bda9a4a121b139b2c9';
  return axios
    .get(URL)
    .then(response => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.error(`Error: ${error}`);
    });
};
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const Home: React.FC<HomeProps> = ({navigation}) => {
  const [allNews, setAllNews] = useState<object>();
  // const news = useContext(Context);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Context.Consumer>
      {Context => (
        <View style={styles.container}>
          <View style={styles.FilterBarContainer}>
            <TouchableOpacity
              onPress={toggleModal}
              style={
                isModalVisible
                  ? styles.showModleBtnPressed
                  : styles.showModleBtn
              }>
              <Text
                style={isModalVisible ? styles.btnTxtPressed : styles.btnTxt}>
                Filter
              </Text>
            </TouchableOpacity>

            <FilterBar
              List={['healthy', 'technology', 'finance', 'arts', 'sport']}
            />
          </View>

          <Modal
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

              <FilterBar
                List={['Country', 'technology', 'finance', 'arts', 'sport']}
              />
              <TouchableOpacity style={styles.saveFilterBtn}>
                <Text style={styles.saveFilterBtnTxt}>Save</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <NewsList />
        </View>
      )}
    </Context.Consumer>
  );
};
export default Home;
const styles = StyleSheet.create({
  FilterBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  showModleBtn: {
    backgroundColor: '#fff',
    fontWeight: '500',
    height: 50,
    marginTop: 30,
    borderRadius: 25,
    maxHeight: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModleBtnPressed: {
    backgroundColor: '#FF3A44',
    fontWeight: '500',
    height: 50,
    marginTop: 30,
    maxHeight: 60,
    borderRadius: 25,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTxt: {
    color: '#7F7F7F',
    fontWeight: '500',
  },
  btnTxtPressed: {
    color: '#fff',
    fontWeight: '500',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '80%',
    marginLeft: 20,
    top: 0,
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
