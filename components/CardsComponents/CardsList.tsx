import { StyleSheet} from 'react-native'
import React from 'react'
import { View,Text } from './../Themed'
import Card from './Card'
import { Gesture,GestureDetector } from 'react-native-gesture-handler'

const CardsList = () => {
  const data = [
    require("../../assets/cards/Card 1.png"),
    require("../../assets/cards/Card 2.png"),
    require("../../assets/cards/Card 3.png"),
    require("../../assets/cards/Card 4.png"),
    require("../../assets/cards/Card 5.png"),
    require("../../assets/cards/Card 6.png"),
    require("../../assets/cards/Card 7.png"),
    require("../../assets/cards/Card 8.png"),
    require("../../assets/cards/Card 9.png")

  ]

  const pan  = Gesture.Pan().onStart(() => {
    console.log("panning start")
  }).onChange((event) => {
    console.log("panning.. scroll y :",event.changeY)
  }).onEnd(() => {
    console.log("panning end.")
  });

  return (
    <GestureDetector gesture={pan}>
    <View style={{padding:10}}>
      {
        data.map((card,index) => (
          <Card  card={card} key={index}/>
        ))
      }
    </View>
    </GestureDetector>
  )
}

export default CardsList

const styles = StyleSheet.create({})