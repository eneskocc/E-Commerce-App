import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import BtnBlack from './BtnBlack'

export class ViewTags extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:34,lineHeight:34,fontWeight:'700'}}>Women’s tops</Text>
        <ScrollView horizontal>
<BtnBlack index={1}/>
<BtnBlack index={2}/>
<BtnBlack index={3}/>
<BtnBlack index={4}/>
<BtnBlack index={5}/>
        </ScrollView>
      </View>
    )
  }
}

export default ViewTags