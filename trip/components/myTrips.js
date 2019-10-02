import React, { Component } from 'react'
import { View,Image,Dimensions ,StyleSheet} from 'react-native'
import{Card ,CardItem,Container,Body,Header,Subtitle,Title,Button,Text} from 'native-base'
import Carousel from 'react-native-snap-carousel'
import {ENTRIES1} from '../data/imglist'
import { withNavigation } from 'react-navigation';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;


export default class myTrips extends Component {
    _renderItem ({item, index}) {
        return (
            <View>
            <View style={{backgroundColor:'black', justifyContent:'center',alignItems:'center',     borderRadius:15,}} >
                <Image source={{uri:item.illustration}}  style={{ alignSelf:'center', width: 250, height: 200 }}/>
                     
                <Text  style={styles.cardText} >{item.title}</Text>
               <Text style={styles.subText}> Visiting the chilled and serene beauty of Bahamas</Text>
    
            </View>

            </View>
        );
    }
    render() {
        return (
            <Container >
            
                <Carousel                  
                ref={(c) => { this._carousel = c; }}
                data={ENTRIES1}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                // contentContainerCustomStyle={{paddingVertical:10}}
                containerCustomStyle={{marginTop:15}}
                // autoplay={true}
                itemWidth={itemWidth}/>
            
<Card style={styles.card}>
    <CardItem style={styles.cardItem}>


        <Button  transparent  onPress={()=>this.props.navigation.navigate("Newtrip")} >
        <Text style={{fontFamily:'Caladea-BoldItalic'}} >
            Add your trip
        </Text>
        </Button>
    </CardItem>
</Card>

            
            </Container>

        )
    }
}


const styles=StyleSheet.create({
    card:{

        margin:10,
        backgroundColor:"#8c8c88",
        width:itemWidth,
        justifyContent:'center',
        alignSelf:'center'
    },
    cardItem:{
        justifyContent:'center',
        borderColor:'white',
        borderWidth:4,
    },
    cardText:{
    
        paddingTop:10,
        fontFamily:'Roboto_medium',
        fontSize:18,
        borderTopColor:'white',
        backgroundColor:'black',
        color:'white',
        width:250
    },
    subText:{
    
        paddingTop:10,
        borderTopWidth:1,
        fontFamily:'Roboto_medium',
        fontSize:12,
        borderTopColor:'white',
        backgroundColor:'black',
        color:'white',
        width:250
    }
})
