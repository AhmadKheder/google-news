import ReadMore from '@fawazahmed/react-native-read-more';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {articleAttriputesType} from '../Components/FilterBar';
import useLoadData from '../hooks/useLoadData';
import {RootStackParamList} from './Types';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

interface BreakingNewsProps {
  navigation: StackNavigationProp<RootStackParamList, 'Favorite'>;
}
const BreakingNews: React.FC<BreakingNewsProps> = ({navigation}) => {
  const {data, loading, error} = useLoadData(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=279121591f3849f4add3292ae66ced49',
  );

  return (
    <View>
      <FlatList
        data={data.articles as []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: {item: articleAttriputesType}) => (
          <View>
            <Image
              style={styles.newsImage}
              source={{uri: `${item.urlToImage}`}}
            />
            <View style={styles.newsDetails}>
              <Text style={styles.newsDate}>
                {item.publishedAt?.slice(0, 10)}
              </Text>
              <Text style={styles.newsTitle}>{item!.title}</Text>
              {/* <Text style={styles.newsDescription}>{item!.description}</Text>
               */}
              <ReadMore
                numberOfLines={3}
                style={styles.newsDescription}
                seeMoreText="Read more"
                seeLessText="Read less"
                seeMoreStyle={{color: '#FF3A44'}}
                seeLessStyle={{color: '#FF3A44'}}>
                {item!.description}
              </ReadMore>
              <Text style={styles.newsAuther}>
                {item!.author
                  ? `Published by ${item!.author}`
                  : 'Published by Unknown author'}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default BreakingNews;
const styles = StyleSheet.create({
  newsImage: {
    width: SCREEN_WIDTH / 1.04,
    height: 150,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 15,
  },
  newsDetails: {
    width: SCREEN_WIDTH / 1.08,
    borderRadius: 20,
    alignSelf: 'center',
  },
  newsDate: {
    fontSize: 12,
    color: '#444',
    fontWeight: '400',
  },
  newsTitle: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '800',
    color: '#444',
  },
  newsDescription: {
    marginVertical: 5,
    color: '#444',
    fontSize: 16,
    fontWeight: '400',
  },
  newsAuther: {
    marginVertical: 5,
    color: '#444',
    fontSize: 12,
    fontWeight: '700',
  },
});
