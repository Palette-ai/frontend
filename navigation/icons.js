import {Maps, ForYou, Users, Explore, Profile} from '../assets';
import React from 'react'
import { View, Image} from 'react-native'

export default function Icons( {name, size} ) {
  switch (name){
    case 'Users':
      console.log(Users)
      return (
        <Image
        style={{ width: size, height: size }}
        source={{
          uri: Users,
        }}
      />
      )
    case 'Map':
      return (
        <View>
          <Image source={Maps} />
        </View>
      )
    case 'ForYou':
      return (
        <View>
          <Image source={ForYou} />
        </View>
      )
    case 'Explore':
      return (
        <View>
          <Image source={Explore} />
        </View>
      )
    case 'Profile':
      return (
        <View>
          <Image source={Profile} />
        </View>
      )
  }
}