import React from 'react';
import { View, Text, Button} from 'react-native';
import { stock } from "../stock";

const StockScreen = ({navigation}: any) => {
  return(
    <View style={{flex: 1}}>
      {stock.map((food:any)=>{
        return <View key={food.uuid} style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', margin:2,padding:10, backgroundColor:'lightgrey'}}>
          <Text style={{color:'black'}}>{food.food}</Text>
          <View style={{flexDirection:'row', width:70, justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black'}}>{food.stock}</Text>
            <Button title='+' color={'grey'}></Button>
          </View>
        </View>
      })}
    </View>
  )
}

export default StockScreen;