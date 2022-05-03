// import Context from '../Context/context';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
const filterByTitlesArr: string[] = [
  'healthy',
  'technology',
  'finance',
  'arts',
  'sport',
];

interface FilterBarProps {
  List: string[];
}
const FilterBar: React.FC<FilterBarProps> = ({List}) => {
  //   const {articles} = useContext(Context);
  const [pressIn, setPressIn] = useState<boolean>(true);
  const filterHandler = (item: string) => {
    // item == 'Filter'?toggle:
    // pressIn
  };

  return (
    <View style={styles.FilterBar}>
      {/* <Button title="Show modal" onPress={() => console.log('s')} /> */}

      <FlatList
        data={List as []}
        style={styles.FilterBarFlatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}: {item: articleAttriputesType}) => (
          <View>
            <TouchableOpacity
              onPress={item => filterHandler}
              onPressIn={() => setPressIn(true)}
              onPressOut={() => setPressIn(false)}
              style={styles.FilterByWordContainer}>
              <Text
                style={
                  pressIn ? styles.FilterByWord : styles.FilterByWordPressed
                }>
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default FilterBar;
const styles = StyleSheet.create({
  FilterBar: {
    flex: 1,
    top: 20,
    borderBottomWidth: 0.5,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 25,
    marginBottom: 10,
    borderBottomColor: '#ddd',
    maxHeight: 80,
  },
  FilterBarFlatList: {
    width: SCREEN_WIDTH / 1.03,
    margin: 5,
    maxHeight: 60,
  },

  FilterByWordContainer: {
    width: 100,
    borderRadius: 25,
    padding: 14,
    backgroundColor: '#fff',

    flexDirection: 'row',
    marginVertical: 4,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  FilterByWord: {
    color: '#7F7F7F',
    backgroundColor: '#fff',
    fontWeight: '500',
  },
  FilterByWordPressed: {
    color: '#FF3A44',

    fontWeight: '500',
  },
});
