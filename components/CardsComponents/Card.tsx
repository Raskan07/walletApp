import { StyleSheet,Image } from 'react-native'
import React from 'react'
import { View,Text} from '../Themed'

const Card = ({card}:any) => {
  return (
    <View>
     <Image source={card} 
     style={{aspectRatio:7/4,width:"100%" ,height:undefined,marginVertical:10 }} />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})