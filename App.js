// import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [minValue, setMinValue] = useState('');
//   const [maxValue, setMaxValue] = useState('');
//   const [refreshRate, setRefreshRate] = useState(1);
//   const [randomNumber, setRandomNumber] = useState(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   let interval;

//   useEffect(() => {
//     if (isGenerating) {
//       interval = setInterval(generateRandomNumber, refreshRate * 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isGenerating, refreshRate]);

//   const generateRandomNumber = () => {
//     const min = parseInt(minValue);
//     const max = parseInt(maxValue);
//     if (!isNaN(min) && !isNaN(max)) {
//       const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//       setRandomNumber(randomNum);
//     }
//   };

//   const handleStartStop = () => {
//     setIsGenerating(!isGenerating);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text style={styles.heading}>Random Number Generator</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Min Value"
//             keyboardType="numeric"
//             value={minValue}
//             onChangeText={setMinValue}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Max Value"
//             keyboardType="numeric"
//             value={maxValue}
//             onChangeText={setMaxValue}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Refresh Rate (sec)"
//             keyboardType="numeric"
//             value={refreshRate.toString()}
//             onChangeText={(value) => setRefreshRate(value)}
//           />
//         </View>
//         <Text style={styles.randomNumber}>
//           {randomNumber !== null ? `${randomNumber}` : ''}
//         </Text>
//         <TouchableOpacity
//           style={[styles.button, isGenerating ? styles.stopButton : styles.startButton]}
//           onPress={handleStartStop}
//         >
//           <Text style={styles.buttonText}>
//             {isGenerating ? 'Stop Generating' : 'Start Generating'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     padding: 20,
//     backgroundColor: '#222',
//     borderRadius: 10,
//     width: '80%',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#fff',
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 10,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     fontSize: 16,
//   },
//   randomNumber: {
//     fontSize: 100,
//     fontWeight: '300',
//     marginTop: 20,
//     color: '#fff',
//     textAlign: 'center',
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   startButton: {
//     backgroundColor: '#00cc66',
//   },
//   stopButton: {
//     backgroundColor: '#cc3300',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [refreshRate, setRefreshRate] = useState(1);
  const [randomNumber, setRandomNumber] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  let interval;

  useEffect(() => {
    if (isGenerating) {
      interval = setInterval(generateRandomNumber, refreshRate * 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isGenerating, refreshRate]);

  const generateRandomNumber = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);
    if (!isNaN(min) && !isNaN(max)) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(randomNum);
    }
  };

  const handleStartStop = () => {
    setIsGenerating(!isGenerating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>RNG</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading}>Random Number Generator</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Min Value"
            keyboardType="numeric"
            value={minValue}
            onChangeText={setMinValue}
          />
          <TextInput
            style={styles.input}
            placeholder="Max Value"
            keyboardType="numeric"
            value={maxValue}
            onChangeText={setMaxValue}
          />
          <TextInput
            style={styles.input}
            placeholder="Refresh Rate (sec)"
            keyboardType="numeric"
            value={refreshRate.toString()}
            onChangeText={(value) => setRefreshRate(value)}
          />
        </View>
        <Text style={styles.randomNumber}>
          {randomNumber !== null ? `${randomNumber}` : ""}
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            isGenerating ? styles.stopButton : styles.startButton,
          ]}
          onPress={handleStartStop}
        >
          <Text style={styles.buttonText}>
            {isGenerating ? "Stop Generating" : "Start Generating"}
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#FFA500",
  },
  box: {
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
    width: "80%",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  randomNumber: {
    fontSize: 100,
    fontWeight: "300",
    marginTop: 20,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  startButton: {
    backgroundColor: "#00cc66",
  },
  stopButton: {
    backgroundColor: "#cc3300",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
