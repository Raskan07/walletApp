import { StyleSheet,Image } from 'react-native'
import React from 'react'
import { View,Text} from '../Themed'
import Animated,{useDerivedValue, useSharedValue}  from "react-native-reanimated"


const Card = ({card,scrolly}:any) => {
  // fixing the scroll direction
  const translateY = useDerivedValue(() => -scrolly.value)
  return (
     <Animated.Image 
       source={card} 
      style={{
        aspectRatio:7/4,
        width:"100%" ,
        height:undefined,
        marginVertical:10 ,
        transform:[{
          translateY:translateY
        }]
        }} />
  )
}

export default Card

const styles = StyleSheet.create({})