import { StyleSheet, useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import { View,Text } from './../Themed'
import Card from './Card'
import { Gesture,GestureDetector } from 'react-native-gesture-handler'
import Animated,{cancelAnimation, clamp, useSharedValue, withClamp, withDecay}  from "react-native-reanimated"

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
  const [listHeight, setListHeight] = useState<any>()
  const {height} = useWindowDimensions();
  console.log("listHeight:",listHeight)
  console.log("Height:",height)

  const centeredListHeight = listHeight - height;

  const scrollY = useSharedValue(0);

  const pan  = Gesture.Pan()
  .onBegin(() => {
    cancelAnimation(scrollY)
  })
  .onStart(() => {
    console.log("panning start")
  }).onChange((event) => {
    scrollY.value =clamp(scrollY.value - event.changeY,0,centeredListHeight)
    console.log("scroll y :",scrollY.value)

  }).onEnd((event) => {
    scrollY.value = withClamp({
      min:0,
      max:centeredListHeight,
    }, withDecay({velocity:-event.velocityY}))
  });

  const activeCardIndex = useSharedValue(null);

  return (
    <GestureDetector gesture={pan}>
    <View style={{padding:10}} onLayout={(e) => setListHeight(e.nativeEvent.layout.height)}>
      {
        data.map((card,index) => (
          <Card
            key={index}
            card={card}
            index={index}
            scrollY={scrollY}
            activeCardIndex={activeCardIndex}
          />
        ))
      }
    </View>
    </GestureDetector>
  )
}

export default CardsList

const styles = StyleSheet.create({})