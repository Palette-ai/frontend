import React from 'react';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconET from 'react-native-vector-icons/Entypo';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View , TextInput, Image, TouchableOpacity} from 'react-native';

const SignIn = () => {
	return (

		<View style={styles.container}>
            <ImageBackground source={require('../assets/background_pic.jpg')} style={styles.image}>
                <View style={styles.FormView}>
                    <View style={styles.inputView}>
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Username" 
                            placeholderTextColor="#003f5c"
                            />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput  
                                style={styles.inputText}
                                placeholder="Password" 
                                placeholderTextColor="#003f5c"
                                />
                    </View>
                    <View style={styles.forgetPassword}>
                        <TouchableOpacity>
                            <Text>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linksView}>
                        <Text>Or log in with:</Text>
                        <View style={styles.iconList}>
                            <View style={styles.icon}>
                                <IconAD name="google" size={50} color="blue" ></IconAD>
                            </View>
                            <View style={styles.icon}>
                                <IconET name="facebook-with-circle" size={50} color="blue" ></IconET>
                            </View>
                            <View style={styles.icon}>
                                <IconET name="linkedin-with-circle" size={50} color="blue" ></IconET>
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        opacity: .8,
      },
      FormView:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:"45%",
        marginBottom:20,
        justifyContent:"flex-start",
        padding:10, 
        alignItems: "center",
      },
      forgetPassword:{
        width:"95%",
        borderRadius:10,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 0,
        height:30,
        marginBottom:0,
        marginTop:10,
        flexDirection: "row",
        justifyContent:"flex-start",
        alignContent: "center",
        padding:0,
        flex: 1.5
      },
      inputView:{
        width:"95%",
        borderRadius:10,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 2,
        height:50,
        marginBottom:10,
        marginTop:10,
        justifyContent:"center",
        padding:20,
        flex: 1
      },
      linksView:{
        width:"95%",
        borderRadius:10,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 0,
        marginBottom:5,
        marginTop:0,
        justifyContent:"center",
        alignItems: "center",
        padding:0,
        flex: 8
      },
      inputText:{
        height:50,
        color:"black"
      },
      iconList: {
        width:"95%",
        borderRadius:10,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 0,
        marginBottom:5,
        marginTop:0,
        justifyContent:"center",
        alignItems: "center",
        padding:0,
        flex: 1,
        flexDirection: "row"
      },
      icon: {
        height:"95%",
        borderRadius:10,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 0,
        marginBottom:0,
        marginTop:0,
        marginRight: 5,
        justifyContent:"center",
        alignItems: "center",
        padding:10,
        flex: 1,
      }
});

export default SignIn
