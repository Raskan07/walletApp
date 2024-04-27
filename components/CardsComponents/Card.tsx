import { StyleSheet,Image } from 'react-native'
import React from 'react'
import { View,Text} from '../Themed'

const Card = () => {
    const card = require("../../assets/cards/Card 1.png")
  return (
    <View>
     <Image source={card} style={{aspectRatio:7/4,width:"100%" ,height:undefined }} />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})