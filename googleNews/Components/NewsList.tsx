// import Context from '../Context/context';
import React, {useContext} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
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

  return (
    <View style={styles.newsList}>
      <FlatList
        data={articles as []}
        renderItem={({item}: {item: articleAttriputesType}) => (
          <TouchableOpacity
            onPress={() => console.log('too many flowers arround')}
            style={styles.headingNews}>
            <Text>{item!.title}</Text>
            <Text>{item!.description}</Text>
            <Text>-clickable Link-</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
      <Button
        title="Print"
        onPress={() => {
          console.log('{articles}');
          console.log({articles});
        }}
      />
    </View>
  );
};
export default NewsList;
const styles = StyleSheet.create({
  newsList: {
    flex: 1,
    borderWidth: 1,
    height: 200,
  },
  headingNews: {
    borderWidth: 1,
    width: SCREEN_WIDTH / 1.03,
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 4,
    // height: 200,
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
