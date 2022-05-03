// import Context from '../Context/context';
import React, {useContext, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const toggleOpenArticle = () => {
    setOpenArticle(!openArticle);
  };
  return (
    <View style={styles.newsList}>
      <FlatList
        data={articles as []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: {item: articleAttriputesType}) => (
          <TouchableOpacity
            onPress={() => toggleOpenArticle}
            style={openArticle ? styles.headingNewsOpend : styles.headingNews}>
            <ImageBackground
              source={{uri: item.urlToImage}}
              style={styles.newsImgBckground}
              imageStyle={{borderRadius: 25}}
            />

            <Text style={styles.newsAuthor}>
              {item!.author ? ` by: ${item!.author}` : 'Unknown author'}
            </Text>
            <Text style={styles.newsTitle}>{item!.title}</Text>
            {/* <Text style={styles.newsDescription}>
              {item!.description?.substring(0, 100)}...
            </Text> */}
            <TouchableOpacity
              onPress={() => Linking.openURL(item!.url!.toString())}>
              <Text style={{color: 'blue'}}>source_link</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
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
    opacity: 0.6,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 25,
    height: 160,
  },
  newsAuthor: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
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
