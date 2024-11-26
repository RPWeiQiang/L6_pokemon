import React from "react";
import {datasource} from "./Data";
import {TextInput,View,Text,Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [letter,setLetter] = React.useState('');
    const [Number, setNumber] = React.useState('');
    const [type, setType] = React.useState('Water');
    return (
        <View style={{padding:10}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Pokemon Name:</Text>
                <TextInput style={{borderWidth:1}} onChangeText={(text)=>setLetter(text)}></TextInput>
                <Text style={{fontWeight:'bold'}}>Card Number:</Text>
                <TextInput style={{borderWidth:1}} onChangeText={(number)=>setNumber(number)}></TextInput>
            </View>
            <View style={{padding:10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:'Water', value:'Water'},
                        {label:'Fire', value:'Fire'},
                    ]}
                />
            </View>
            <Button title="Add" onPress={() => {
                let item={key:letter,img:Number};
                let indexNum=1;
                if (type==="Water"){
                    indexNum=0;
                }
                datasource[indexNum].data.push(item);
                navigation.navigate('Home')
            }
            }
            >SUBMIT</Button>
        </View>
    );
};

export default Add;
