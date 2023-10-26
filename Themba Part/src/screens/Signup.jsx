// Libraries
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// Components
import { CustomFooter } from '../components/CustomFooter';
import { CustomInput } from '../components/CustomInput';
import { CustomBtn } from '../components/CustomBtn';
// import { EmailConfirmation } from './EmailConfirmation';

// vector icons 
import { Entypo } from '@expo/vector-icons';


// Firebase config
import  authObj  from '../firebase/config';

export const Signup = ({ navigation }) => {

    const auth = authObj
    
    // States
    const [fullName, setFullName] = useState('');
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    // Validation conditional rendering
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPwdValid, setIsPwdValid] = useState(true);
    const [isPwdMatch, setIsPwdMatch] = useState(true);
    const [isPwdVisible, setIsPwdVisible] = useState(true);
    const [isTextSecure, setIsTextSecure] = useState(false);

    function navigateToSignIn(){
        navigation.navigate('LoginScreen');
    }

     // hide password / show password
     function handlePasswordVisibility() {
        setIsPwdVisible( (currentValue) => {
            return !currentValue;
        });
        setIsTextSecure( (currentState) => {
            return !currentState;
        })
    }

    // async
    async function navigateToConfirmEmail() {

        const emailString = email.toString();

        setIsNameValid(true);
        setIsEmailValid(true);
        setIsPwdValid(true);
        setIsPwdMatch(true);
        if(fullName.length === 0){
            setIsNameValid(false);
            return;
        }
        if(emailString.length === 0 || !emailString.match(/^(.+)@(.+)$/)){
            setIsEmailValid(false);
            return;
        }
        if(password.length === 0 || password.length < 6){
            setIsPwdValid(false);
            return;
        }
        if(password !== confirmPwd){
            setIsPwdMatch(false);
            // ReloadInstructions;
            return;
        }

        try{
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("Data sent user created: ", user);
                navigation.navigate('EmailConfirmationScreen', {email} );
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error information not sent");
                // ERROR  Error code:  undefined
                console.error("Error code: ", error.code);
                // ERROR  Error message:  Cannot read property '_getRecaptchaConfig' of undefined
                console.error("Error message: ",errorMessage);
                // ..
            });
        } catch(error){
            console.log("Error, user signup with email: ", error);
        }
        
        setEmail("");
        setFullName("");
        setConfirmPwd("");
        setPassword("");
    }

    // function navigateToConfirmEmail(){
    //     navigation.navigate('EmailConfirmationScreen');
    // }

    // Google Sign-up
    const provider = new GoogleAuthProvider();
    async function google(){
        await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            // ERROR Error meassgae signInWithPopup is not a function ( it is undefined)
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error("Error is: ", errorCode);
            console.error("Error Message: ", errorMessage);
            // ...
        });
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.txt1}>Create an account</Text>
                        <Text style={styles.txt2}>Lets help you set up your account</Text>
                        <Text style={styles.txt2}>It wont take long</Text>
                    </View>
                    <View style={styles.body}>
                        <CustomInput 
                            name = "Full name"
                            placeholder = "Enter Name Here"
                            value = {fullName}
                            setValue = {setFullName}
                        />
                        {!isNameValid && <Text style={{
                            color: 'red',
                            fontSize: 13,
                        }}>Input required</Text>}
                        <CustomInput 
                            name = "Email"
                            placeholder = "Enter Email Here"
                            value = {email}
                            setValue = {setEmail}
                        />
                        {!isEmailValid && email.length > 0 && <Text style={{
                            color: 'red',
                            fontSize: 13,
                        }}>Invalid email input</Text>}
                        <CustomInput 
                            name = "Create Password"
                            placeholder = "Enter Password Here"
                            value = {password}
                            setValue = {setPassword}
                            secureTextEntry = {isTextSecure}
                        />
                        {!isPwdValid && password.length > 0 && <Text style={{
                            color: 'red',
                            fontSize: 13,
                        }}>Password length must not be less than 6 characters</Text>}
                        <CustomInput 
                            name = "Confirm Password"
                            placeholder = "Confirm Password Here"
                            value = {confirmPwd}
                            setValue = {setConfirmPwd}
                            secureTextEntry = {isTextSecure}
                        />
                        {!isPwdMatch && confirmPwd > 0 && <Text style={{
                            color: 'red',
                            fontSize: 13,
                        }}>Passwords must match</Text>}
                        <View style={styles.btnContainer}>
                            <CustomBtn 
                                name = "Sign-up" 
                                navigateTo={navigateToConfirmEmail}
                            />
                        </View>
                        <TouchableOpacity style={styles.pwdIconShow} onPress={handlePasswordVisibility}>
                            {
                                isPwdVisible ? 
                                <Entypo name="eye" size={30} color="black" /> :
                                <Entypo name="eye-with-line" size={30} color="black" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pwdIcon2Show} onPress={handlePasswordVisibility}>
                            {
                                isPwdVisible ? 
                                <Entypo name="eye" size={30} color="black" /> :
                                <Entypo name="eye-with-line" size={30} color="black" />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <CustomFooter 
                            name = "Sign-in"
                            accountStatus="Already Have a Account"
                            navigateFunction = {navigateToSignIn}
                            googleAuth={google}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: 20
        // alignItems: 'center',
    },
    header: {
        // backgroundColor: 'red',
        // height: 30,
    },
    body: {
        // flex: 3,
        height: 500,
        justifyContent: 'space-evenly',
    },
    footer: {
        flex: 1
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    txt2: {
        fontSize: 11,
    },
    btnContainer: {
        alignItems: 'center'
    },
    pwdIconShow: {
        position: 'absolute',
        top: 250,
        left: 270
    },
    pwdIcon2Show: {
        position: 'absolute',
        top: 345,
        left: 270
    }
});