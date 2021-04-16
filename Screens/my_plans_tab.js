import React from 'react';
import { StyleSheet,ScrollView, View, Text, Image, SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { Dimensions } from 'react-native';
import XBar from 'react-native-x-bar';

const jsondata = require('./dataPersonal.json');
const windowWidth = Dimensions.get('window').width;
const currentDate = new Date().toDateString();

export default function MyPlans({ navigation }){
    const List = {
        name: "",
        excercise1:{
            excName : 'temp',
            excWeight : 420,
            excSet : 69, 
            excRep : 42069
        },
        excercise2:{
            excName : 'temp',
            excWeight : 420,
            excSet : 69, 
            excRep : 42069
        },
        excercise3:{
            excName : 'temp',
            excWeight : 420,
            excSet : 69, 
            excRep : 42069
        }
    };
    if(navigation.getParam("name") != undefined){
        List.name = navigation.getParam("name");
        List.excercise1 = navigation.getParam("excerise1");
        List.excercise2 = navigation.getParam("excerise2");
        List.excercise3 = navigation.getParam("excerise3");
        jsondata.push(List);
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.dateBar}>
                {"\n\n"}
                {currentDate}
                {"\n"}
            </Text>
            <Text style={styles.titleBar}>
                <Text>Discover</Text>
                {"\n"}
            </Text>
            
            <ScrollView style={styles.scrollView}>
                <View style={styles.innerContainer}>  
                    <Button   style={{marginHorizontal:10}}
                        title = "Presets"
                        type = "clear"
                        onPress = {() => navigation.navigate('home_tab')}

                    />  
                    <Button  
                        title = "My plans"
                        onPress = {() => navigation.navigate('my_plans_tab')} 
                    />   
                </View>    
                <View style={{marginTop: 20}}/>
                <DataTable>{
                    jsondata.map((currentObject, i) => (
                        <DataTable style= {styles.table} key={i} bottomDivide>
                            <DataTable.Header>
                                <Text style={styles.tableHeader}>{"\n\n\n"}{currentObject.name}{"\n"}</Text>
                            </DataTable.Header>

                            <DataTable.Row style={styles.tableRow}>
                                <DataTable.Cell style={styles.excName}>
                                <Text>{currentObject.excercise1.excName}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excWeight}> 
                                <Text>{currentObject.excercise1.excWeight+" lbs"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}> 
                                <Text>{currentObject.excercise1.excRep+" X"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}>  
                                <Text>{currentObject.excercise1.excSet}</Text>
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={styles.tableRow}>
                                <DataTable.Cell style={styles.excName}>
                                <Text style={styles.excName}>{currentObject.excercise2.excName}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excWeight}> 
                                <Text>{currentObject.excercise2.excWeight+" lbs"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}> 
                                <Text>{currentObject.excercise2.excRep+" X"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}> 
                                <Text>{currentObject.excercise2.excSet}</Text>
                                </DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row style={styles.tableRow}>
                                <DataTable.Cell style={styles.excName}>
                                <Text style={styles.excName}>{currentObject.excercise3.excName}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excWeight}> 
                                <Text>{currentObject.excercise3.excWeight+" lbs"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}> 
                                <Text>{currentObject.excercise3.excRep+" X"}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={styles.excElement}> 
                                <Text>{currentObject.excercise3.excSet}</Text>
                                </DataTable.Cell>
                                <Text>{"\n\n"}</Text>
                            </DataTable.Row>

                        </DataTable>
                    ))
                }</DataTable>
                <View style={{marginBottom:30}}/>
                <DataTable style= {styles.tablebutton}>
                    <XBar style={styles.toolbar}
                        slots={[
                            { 
                                children : <Image style={styles.add_icon} source={require("./assets/add.jpg")}/>,
                                onPress : () => {navigation.navigate('add_workout_tab');}
                            }
                        ]}
                        activeOpacity={ .5 }
                    />
                </DataTable>
                
            </ScrollView>


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
    dateBar: {
        fontSize: 15,
        marginHorizontal:20
    },
    titleBar: {
        fontSize: 30,
        marginHorizontal:20
    },
    add_icon: {
        width : 100,
        height : 100,
        marginTop: 3,
        marginHorizontal: windowWidth/2.65,
    },
    toolbar: {
        width : windowWidth/4,
        height : 80 
    },
    tooladd: {
        width : windowWidth/4,
        height : 80 
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
        marginVertical:  10,
        backgroundColor: "#E7FBEF"
    },
    tablebutton:{
        borderWidth: 2,
        padding: 40,
        alignContent: 'center',
        marginHorizontal: 2,
        maxWidth: windowWidth - 2,
        marginVertical:  10,
        backgroundColor: "#E7FBEF"
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
    },
    innerContainer:{  
        flex: 1,  
        flexDirection: "row"  
    }
})