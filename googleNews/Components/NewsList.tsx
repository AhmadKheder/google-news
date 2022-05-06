// import Context from '../Context/context';
import React, {useContext, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from './BottomSheet';
import Context from './Context';
export type articleAttriputesType = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: any | null;
  urlToImage: any | null;
  publishedAt: string | null;
  content: string | null;
};
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const NewsList = () => {
  const {articles} = useContext(Context);
  const [openArticle, setOpenArticle] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [newsDetailes, setNewsDetailes] = useState({
    title: '',
    description: '',
  });
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleOpenArticle = (isModalVisible: boolean) => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.newsList}>
      <FlatList
        data={articles as []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: {item: articleAttriputesType}) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!isModalVisible);
              setNewsDetailes({
                title: item.title as string,
                description: item.description as string,
              });
            }}
            style={openArticle ? styles.headingNewsOpend : styles.headingNews}>
            <ImageBackground
              source={{uri: item.urlToImage}}
              style={styles.newsImgBckground}
              imageStyle={{borderRadius: 25}}
            />

            <View style={styles.cardContainer}>
              <Text style={styles.newsTitle}>{item!.title}</Text>
              <View style={styles.newsAutherDatContainer}>
                <Text style={styles.newsAuthor}>
                  {item!.author ? `${item!.author}` : 'Unknown author'}
                </Text>
                <Text style={styles.newsAuthor}>
                  {item.publishedAt?.slice(0, 10)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      {isModalVisible && (
        <BottomSheet
          isModalVisible={isModalVisible}
          newsDetailes={newsDetailes}
          ComponentName="NewsList"
        />
      )}
    </View>
  );
};
export default NewsList;
const styles = StyleSheet.create({
  newsList: {
    flex: 1,
    top: 20,
  },

  newsImgBckground: {
    width: SCREEN_WIDTH / 1.03,
    position: 'absolute',
    opacity: 0.8,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 25,
    height: 160,
  },
  cardContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  newsAuthor: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  newsDescription: {
    fontSize: 10,
    fontWeight: '400',
    opacity: 0.7,
    color: '#000',
  },

  headingNews: {
    width: SCREEN_WIDTH / 1.03,
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 4,
    height: 160,
  },
  headingNewsOpend: {
    width: SCREEN_WIDTH / 1.03,
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 4,
    height: 500,
    // flex: 1,
  },
  newsAutherDatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 80,
  },

  rowcontainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
  },
});
