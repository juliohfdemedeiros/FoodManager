import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { recipes } from "../recipes";

const ListMeal = ({item, navigation}: any) => {
  return (
    <TouchableOpacity 
      onPress={(): any =>
        navigation.navigate('MealScreen',
        { 
          suggestions: recipes.filter(
            (check): any => {
              if(check.meal == item.name)
                return check;
            }),
          regime: item.name
        })}
      style={styles.meal}
    >
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
    height: 86
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