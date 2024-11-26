import React, {useState} from "react";
import {datasource} from "./Data";
import {TextInput,View,Text,Button,Alert} from "react-native";


const Edit = ({navigation,route}) => {
    const [letter,setLetter] =useState(route.params.key);
    const [Number, setNumber] = React.useState(route.params.img);
    const [type, setType] = React.useState(route.params.type);
    return (
        <View style={{padding:10}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Pokemon Name:</Text>
                <TextInput value={letter} style={{borderWidth:1}} onChangeText={(text)=>setLetter(text)}  ></TextInput>
                <Text style={{fontWeight:'bold'}}>Card NUmber:</Text>
                <TextInput value={Number} style={{borderWidth:1}} onChangeText={(number)=>setNumber(number)} ></TextInput>
            </View>

            <View style={{padding:10,flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Button title="Save"

                            onPress={()=>{

                                let indexNum=1
                                if(route.params.type==='Water'){
                                    indexNum=0;
                                }
                                datasource[indexNum].data[route.params.index].key=letter;
                                datasource[indexNum].data[route.params.index].img=Number;
                                navigation.navigate('Home');
                            }
                            }

                    />
                </View>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Button title="Delete"
                            onPress={() => {
                                let indexNum=1
                                if(route.params.type==='Water'){
                                    indexNum=0;
                                }
                                Alert.alert("Are You Sure",'',
                                    [{text:'Yes',onPress:()=>{
                                            datasource[indexNum].data.splice(route.params.index,1);
                                            navigation.navigate('Home');
                                        }},
                                        {text:'No'}]
                                )
                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
