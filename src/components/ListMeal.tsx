import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListMeal = ({item, navigation}: any) => {
  return (
    <TouchableOpacity 
      onPress={(): any => 
        navigation.navigate('MealScreen', {name: item.name})} style={styles.meal} >
      <View style={styles.mealView}>
          <Text style={styles.mealName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  meal: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 100
  },
  mealView: {
    flex: 1,
    flexDirection: 'column'
  },
  mealName: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ListMeal;