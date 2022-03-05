import React from 'react';
import { View, Text, Alert } from 'react-native';

const MealScreen = ({route: { params }}: any) => {
  const { name } = params;
  const recipe = {
    title: 'sandes de ovo mexido com caneca de café cevada',
    goals: [
      {
        name: 'caneca com café de cevada e leite',
        ingredients: [
          {ingredient: 'café de cevada', quantity: 4, protein: 0.22, carbohydrates: 2.324, fats: 0.008},
          {ingredient: 'leite meio gordo', quantity: 150, protein: 4.8, carbohydrates: 7.2, fats: 2.4},
          {ingredient: 'açucar branco', quantity: 4, protein: 0, carbohydrates: 4, fats: 0}
        ]
      },
      {
        name: 'sandes de ovo mexido',
        ingredients: [
          {ingredient: 'ovo', quantity: 55, protein: 7, carbohydrates: 0, fats: 6},
          {ingredient: 'leite meio gordo', quantity: 10, protein: 0.32, carbohydrates: 0.48, fats: 0.16},
          {ingredient: 'papo seco', quantity: 65, protein: 5.85, carbohydrates: 31.85, fats: 2.275},
          {ingredient: 'manteiga de vaca', quantity: 2, protein: 0.010, carbohydrates: 0.012, fats: 1.62},
          {ingredient: 'sal refinado', quantity: 1, protein: 0, carbohydrates: 0, fats: 0},
          {ingredient: 'pimenta branca', quantity: 1, protein: 0, carbohydrates: 0, fats: 0},
        ]
      }
    ]
  }; 
  let total: number;


  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', height:60, justifyContent:'space-between'}}>
        <View style={{flex:1,backgroundColor:'lightgrey', justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:18}}>{name} de hoje</Text></View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text>Proteínas: {   
        recipe.goals.filter(
        (goal): any => {goal.ingredients.reduce(
          (prev, ingredient): any => 
          {console.log(prev + ingredient.protein)}, 0

        )})}
    </Text>
        <Text>Total de carboidratos: {
        4*(recipe.goals[0].ingredients[0].carbohydrates + 
        recipe.goals[0].ingredients[1].carbohydrates + 
        recipe.goals[0].ingredients[2].carbohydrates +
        recipe.goals[1].ingredients[0].carbohydrates + 
        recipe.goals[1].ingredients[1].carbohydrates + 
        recipe.goals[1].ingredients[2].carbohydrates +
        recipe.goals[1].ingredients[3].carbohydrates + 
        recipe.goals[1].ingredients[4].carbohydrates + 
        recipe.goals[1].ingredients[5].carbohydrates 
        )} cal</Text>
        <Text>Total de lípidos: {
        4*(recipe.goals[0].ingredients[0].fats + 
        recipe.goals[0].ingredients[1].fats + 
        recipe.goals[0].ingredients[2].fats +
        recipe.goals[1].ingredients[0].fats + 
        recipe.goals[1].ingredients[1].fats + 
        recipe.goals[1].ingredients[2].fats +
        recipe.goals[1].ingredients[3].fats + 
        recipe.goals[1].ingredients[4].fats + 
        recipe.goals[1].ingredients[5].fats 
        )} cal</Text>
      </View>
    </View>
  )
};

export default MealScreen;