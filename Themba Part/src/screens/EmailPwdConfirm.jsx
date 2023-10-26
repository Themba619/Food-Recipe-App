import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Components
import { CustomBackBtn } from '../components/CustomBackBtn';
import { CustomInputCode } from '../components/CustomInputCode';

export const EmailPwdConfirm = ({navigation}) => {

    function goBack(){
        navigation.goBack()
    }

    // Send pin on first render
    useEffect( () => {
        sendPinFunction();
    }, []);

    const initialMinutes = 4;
    const initialSeconds = 0;
  
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
  
    // 4 min time interval
    useEffect(() => {
      const timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          // Timer has reached 00:00, you can perform some action here.
          clearInterval(timer); // Stop the timer
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(timer);
    }, [minutes, seconds]);
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Function that holds the code to send Pin
    async function sendPinFunction(){
        await sendEmailVerification(auth.currentUser)
        .then(() => {
        // Email verification sent!
        // ...
        console.log("Email verification pin sent");
        Alert.alert('Email Verification', 'Email verification has been sent', [
            {
            text: 'Ok',
            onPress: () => console.log("Ok Pressed"),
            }
        ]);
        }).catch ( (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error sending verification code");
        console.error("Error code: ", errorCode);
        console.error("Error Message: ", errorMessage);
        });
    }

    // Reset timer send new pin
    function handleSendAgainClick() {
        // Reset the timer to initial values
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
        // sendPinFunction();
    }

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
        <View>
                <CustomBackBtn 
                    backNavigation = {goBack}
                />
                <CustomInputCode />
                <View style={styles.timer}>
                    <Text>Code expires in <Text style={{color: 'red'}}>{formattedMinutes}:{formattedSeconds}</Text></Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    marginVertical: 45,
                }}>
                    <TouchableOpacity style={styles.verify}>
                        <Text style={{color: '#fff', fontWeight: '700'}}>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sendAgain} onPress={handleSendAgainClick}>
                        <Text style={{color: '#9FA5C0', fontWeight: "700"}}>Send Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    timer: {
        alignItems: 'center',
    },
    verify: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1FCC79',
        width: '95%',
        height: 60,
        marginVertical: 5,
        borderRadius: 40,
    },
    sendAgain: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: '95%',
        height: 60,
        marginVertical: 5,
        borderRadius: 40,
        borderWidth: 1,
    }
})