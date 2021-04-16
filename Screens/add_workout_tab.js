import React from 'react';
import {Dimensions} from 'react-native';
import XBar from 'react-native-x-bar';
import {StyleSheet,ScrollView, Text, SafeAreaView, Alert, Image} from 'react-native';
import {Button} from 'react-native-elements'
import {DataTable , TextInput} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const currentDate = new Date().toDateString();

let name = [];
let weight = [];
let rep = [];
let set = [];
let temp = "Add exercise";
export default function Add_Workout({ navigation }){
    const List = {
        name: "",
        excerise1:{
            excName : 'temp',
            excWeight : 420,
            excSet : 69, 
            excRep : 42069
        },
        excerise2:{
            excName : 'temp',
            excWeight : 420,
            excSet : 69, 
            excRep : 42069
        },
        excerise3:{
            excName : 'temp',
            excWeight : 420,
            excSet : 69, 
            excRep : 42069
        }
    };
    if(!name.includes(navigation.getParam('excName')) && navigation.getParam('excName') != undefined){
        name.push(navigation.getParam('excName'));
        weight.push(navigation.getParam('excWeight'));
        rep.push(navigation.getParam('excRep'));
        set.push(navigation.getParam('excSet'));
    }

    const [text, setText] = React.useState('');
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.dateBar}>
                {"\n\n"}
                {currentDate}
                {"\n"}
            </Text>
            <Text style={styles.titleBar}>
                <Text>Add Workout</Text>
                {"\n"}
            </Text>
            <SafeAreaView style={styles.container2}>
                <ScrollView style={styles.scrollView}> 
                    <Text style={styles.formLabel}>
                        <Text>Workout name</Text>
                        {"\n"}
                    </Text>
                    
                    <TextInput style={styles.inputForm}
                        placeholder='Name of Workout'
                        onChangeText={text => setText(text)}
                    />
                    <Text style={styles.formLabel}>
                        <Text>Added exercises</Text>
                        {"\n"}
                    </Text>
                    <DataTable>
                    {
                        name.map((currentObject, i) => (
                            <DataTable.Row style={styles.tableRow} key={i} bottomDivide>
                                <DataTable.Cell style={styles.excName}>
                                <Text>{name[i]}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excWeight}> 
                                <Text>{weight[i]+" lbs"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}> 
                                <Text>{rep[i]+" X"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}>  
                                <Text>{set[i]}</Text>
                                </DataTable.Cell>
                            </DataTable.Row>
                        ))
                    }</DataTable>
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style = {styles.buttonArea}>
            <XBar style={styles.toolbar}
                slots={[
                    { 
                        children : <Button  style = {styles.addButtons}
                            title = "Add Existing Exercise"
                            onPress = {() => navigation.navigate('add_existing_exercise')} 
                        />
                    },
                    { 
                        children : <Button  style = {styles.addButtons}
                            title = "Add New Exercise"
                            onPress = {() => navigation.navigate('add_new_exercise')} 
                        />
                    },
                    {
                        children : <Button  style = {styles.addButtons}
                            title = "Add New Workout"
                            onPress = {() =>{
                                if(name[0] != undefined){
                                    List.name = text;
                                    List.excerise1.excName = name[0];
                                    List.excerise1.excWeight = weight[0];
                                    List.excerise1.excRep = rep[0];
                                    List.excerise1.excSet = set[0];
                                    List.excerise2.excName = name[1];
                                    List.excerise2.excWeight = weight[1];
                                    List.excerise2.excRep = rep[1];
                                    List.excerise2.excSet = set[1];
                                    List.excerise3.excName = name[2];
                                    List.excerise3.excWeight = weight[2];
                                    List.excerise3.excRep = rep[2];
                                    List.excerise3.excSet = set[2];
                                    name.length = 0;
                                    weight.length = 0;
                                    rep.length = 0;
                                    set.length = 0;
                                    navigation.navigate('my_plans_tab',List);
                                }
                                else{
                                    Alert.alert("Please add an exercise");
                                }
                            }} 
                        />
                    },
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
            </SafeAreaView>  
            <XBar style={styles.toolbar}
                slots={[
                    { 
                        children : <Image style={styles.toolbar_discover} source={require("./assets/C_discover.jpg")}/>,
                        onPress : () => {navigation.navigate('home_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_workout} source={require("./assets/workout.jpg")}/>,
                        onPress : () => {navigation.navigate('workout_tab');}
                    },
                    {
                        children : <Image style={styles.toolbar_graph} source={require("./assets/graph.jpg")}/>,
                        onPress : () =>  {navigation.navigate('analytics_selection_tab');}
                    },
                    { 
                        children : <Image style={styles.toolbar_setting} source={require("./assets/setting.jpg")}/>,
                        onPress : () => {navigation.navigate('settings_tab');}
                    }
                ]}
                activeOpacity={ .5 }
                style={{
                    height : 90,
                    borderColor : '#ddd',
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dateBar: {
        fontSize: 15,
        marginHorizontal:20
    },
    titleBar: {
        fontSize: 30,
        marginHorizontal:20,
    },
    formLabel: {
        fontSize: 20,
        marginHorizontal:20,
        marginVertical: 20,
        marginTop: 30
    },
    inputForm: {
        fontSize: 20,
        marginHorizontal:20,
        marginBottom: 30
    },
    container: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#FAE8B4'
    },
    scrollView: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#F7DDE3'
    },
    container2: {
        padding: 24,
        flex: 1,
        fontSize:35,
        backgroundColor: '#FFFFFF'
    },
    addButtons: {
        marginVertical: 5,
        marginHorizontal: 1,
        backgroundColor: '#FFFFFF',
        width : (windowWidth/3) - 2
    },
    buttonArea : {
        backgroundColor: '#F7DDE3'
    },
    excName:{ 
        flex: 2.75
    },
    excWeight:{ 
        flex: 1.5
    },
    excElement:{ 
        flex: 0.85
    },
    tableHeader:{
        fontSize: 18,
        marginVertical: 2
    },
    table:{
        borderWidth: 2,
        padding: 10,
        alignContent: 'center',
        marginHorizontal: 2,
        maxWidth: windowWidth - 2,
        marginVertical:  10
    },
    toolbar: {
        width : windowWidth/4,
        height : 80 
    },
    toolbar_discover: {
        width : windowWidth/4,
        height : 70,
    },
    toolbar_workout: {
        width : windowWidth/4,
        height : 70,
    },
    toolbar_graph: {
        width : windowWidth/4-10,
        marginHorizontal:5,
        height : 80,
    },
    toolbar_setting: {
        width : windowWidth/4-10,
        marginHorizontal:5,
        height : 80,
    }
})
