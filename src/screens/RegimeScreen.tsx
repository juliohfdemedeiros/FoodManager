import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import ListMeal from '../components/ListMeal';

const RegimeScreen = ({navigation}: any) => {
  const regime = [
    {name: 'Pequeno almoço'},
    {name: 'Breakfast'},
    {name: 'Almoço'},
    {name: 'Lanche'},
    {name: 'Jantar'},
    {name: 'Seia'}
  ];
  return(
    <View style={styles.container}>
      <View style={{flexDirection:'row', height:60, justifyContent:'space-between'}}>
        <View style={{flex:1,backgroundColor:'lightgrey', justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:18}}>Refeições de hoje</Text></View>
      </View>
      <FlatList
        data={regime} 
        renderItem={({item}: any) => <ListMeal item={item} navigation={navigation} />} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
})

export default RegimeScreen;