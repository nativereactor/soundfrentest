import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    StatusBar, 
    SafeAreaView, 
    TextInput as NativeTextInput,
    ScrollView } from 'react-native';
import { 
    Appbar, 
    DefaultTheme, 
    Provider as PaperProvider, 
    Colors, 
    Paragraph, 
    Button, 
    IconButton, 
    HelperText,
    Divider,
    TextInput } from 'react-native-paper';
import FloatingLabel from 'react-native-floating-labels';

class Form extends React.Component {

    state = {

    }
    
    render(){
        const { theme } = this.props;
        const button_theme = {...theme, colors: {...theme, primary: Colors.blue700}};
        const submit_theme = {...theme, colors: {...theme, primary: Colors.grey700}};
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.container}>
                    <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
                    <Appbar.Header style={{ elevation: 0.5 }}>
                        <Appbar.Action icon={'chevron-left'} onPress={null} />
                        <Appbar.Content titleStyle={style.title} title="Create Submission" />
                    </Appbar.Header>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={style.poster}>
                            <TouchableOpacity style={style.camera1_container}>
                                <Image style={style.camera1} source={require('./assets/camera.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={style.camera2_container}>
                                <Image style={style.camera2} source={require('./assets/camera-white.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={style.form_inner}>
                            <FloatingLabel {...inputStyle}>Submission Title</FloatingLabel>
                            <View style={style.row}>
                                <View style={style.flex1}>
                                    <FloatingLabel {...inputStyle}>Start Date</FloatingLabel>
                                    <Paragraph style={style.helpertext}>Date of Submission</Paragraph>
                                </View>
                                <View style={{ width: 50 }} />
                                <View style={style.flex1}>
                                    <FloatingLabel {...inputStyle}>End Date</FloatingLabel>
                                    <Paragraph style={style.helpertext}>Deadline</Paragraph>
                                </View>
                            </View>
                            <FloatingLabel {...inputStyle}>Studio, Cafe, or another cool place</FloatingLabel>
                            <Paragraph style={style.helpertext}>Location of Event</Paragraph>
                            

                            <Divider style={style.divider} />

                            
                            <FloatingLabel {...inputStyle}>Memiliki lagu ciptaan sendiri</FloatingLabel>
                            <View style={style.row}>
                                <Paragraph style={[style.helpertext, style.flex1]}>Requirements 1</Paragraph>
                                <Paragraph style={[style.helpertext, {color: Colors.grey400}]}>0/60</Paragraph>
                            </View>
                            <View>
                                <Button onPress={() => {}} contentStyle={{ marginLeft: -9 }} labelStyle={{ fontWeight: 'bold' }} style={{ width: 192 }} compact uppercase={false} theme={button_theme} icon={'plus-circle-outline'}>
                                    Add More Requirement
                                </Button>
                            </View>
                            
                            
                            <Divider style={style.divider} />
                            
                            
                            <NativeTextInput placeholder={"The Submission give you the best opportunities"} underlineColor={Colors.red500} style={style.longtext} mode={'outlined'} multiline numberOfLines={7} />
                            <View style={{...style.row, marginTop: 15}}>
                                <Paragraph style={[style.helpertext, style.flex1]}>Description of your Submission</Paragraph>
                                <Paragraph style={[style.helpertext, {color: Colors.grey400}]}>0/300</Paragraph>
                            </View>


                            <Divider style={style.divider} />


                            <FloatingLabel {...inputStyle}>Kontrak bermain selama setahun</FloatingLabel>
                            <View style={style.row}>
                                <Paragraph style={[style.helpertext, style.flex1]}>Benefits 1</Paragraph>
                                <Paragraph style={[style.helpertext, {color: Colors.grey400}]}>0/60</Paragraph>
                            </View>
                            <View>
                                <Button onPress={() => {}} contentStyle={{ marginLeft: -9 }} labelStyle={{ fontWeight: 'bold' }} style={{ width: 160 }} compact uppercase={false} theme={button_theme} icon={'plus-circle-outline'}>
                                    Add More Benefits
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                    <Button uppercase={false} onPress={() => {}} labelStyle={{ color: Colors.white, fontWeight: 'bold' }} contentStyle={{ backgroundColor: Colors.grey400, height: 54 }} theme={submit_theme}>Create</Button>
                </View>
            </SafeAreaView>
        );
    }

}

const inputStyle = {
    labelStyle: {
        paddingLeft: 0,
        paddingRight: 0,
        color: Colors.grey400
    },
    inputStyle: {
        borderWidth: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    style: {
        borderBottomWidth: 1,
        borderColor: Colors.grey400,
        marginBottom: 15
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: Colors.grey900,
        fontSize: 16
    },
    poster: {
        height: 160,
        backgroundColor: Colors.grey300
    },
    camera1_container: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    camera1: {
        width: 34,
        height: 34
    },
    camera2_container: {
        position: 'absolute',
        bottom: -60,
        left: 25,
        width: 120,
        height: 120,
        backgroundColor: Colors.grey500,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera2: {
        width: 34,
        height: 34
    },
    form_inner: {
        paddingHorizontal: 25,
        paddingVertical: 80
    },
    row: {
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    flex0: {
        flex: 0
    },
    divider: {
        height: 6,
        marginHorizontal: -25,
        marginTop: 40,
        marginBottom: 20
    },
    helpertext: {
        marginTop: -11,
        marginBottom: 11,
        fontSize: 12,
        color: Colors.grey800
    },
    longtext: {
        borderWidth: 1.2,
        borderColor: Colors.grey400,
        marginTop: 15,
        borderRadius: 10,
        textAlignVertical: 'top',
        padding: 15
    }
});

export default Form;