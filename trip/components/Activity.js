import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Activity extends Component {

    render() {
        var act=this.props.navigation.getParam('act')

        return (
            <View>
                <Text> Form for activiy {act.n}</Text>
            </View>
        )
    }
}
