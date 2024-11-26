import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SectionList, StatusBar, Image, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";


const styles = StyleSheet.create({
    container: {
        margin:10,
        marginBottom:200,
    },
    containerButton: {
        borderBottomWidth: 1,
        padding:20,

    },
    headerButton:{
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'#12a2ee',
        color:'white',
        fontWeight:'bold',
    },
    headerContainer:{
        borderWidth:1,
        display:"flex",
        alignItems:"center",
        flexDirection:'row',
        justifyContent:"center",
        textAlign:'center',

    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
    },
    pokemonImage: {
        width: 250,
        height: 330,
    },
    pokemonText:{
        fontSize:20,
        fontWeight:'bold',
    },
    pokemonContainer: {
        backgroundColor:'#D8BFD8',
        display:"flex",
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:20,
    }

})




const Home=({navigation})=> {
    const renderItem = ({item,section,index}) => {
        return (
            <TouchableOpacity  style={styles.pokemonContainer}
               onPress={() => {
                   navigation.navigate('Edit',{index:index,type:section.title,key:item.key,img:item.img});
               }}
            >
                <Text style={styles.pokemonText}>{item.key}</Text>
                <Image source={{ uri: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_"+item.img+"-2x.png" }} style={styles.pokemonImage} />
            </TouchableOpacity>
        );
    };
    return (
        <View >
            <StatusBar hidden={true}/>
            <View style={styles.containerButton}>
                <Button title="Add Pokemon" onPress={() => {navigation.navigate('Add')}}/>
            </View>
            <View style={styles.container}>
                <SectionList sections={datasource} renderItem={renderItem}
                             renderSectionHeader={({section:{title,bgColor,textColor,icon}})=>(
                                 <View style={[styles.headerContainer, {backgroundColor:bgColor}]}>
                                     <Icon name={icon} size={30} color={textColor}  style={{marginRight:5,}}/>
                                     <Text style={[styles.headerText,{ color:textColor}]}>
                                         {title}
                                     </Text>
                                 </View>
                             )}/>
            </View>
        </View>
    );
}
export default Home;
