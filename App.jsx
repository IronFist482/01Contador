import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState("#757575");
  const [backColor, setBackColor] = useState("#757575");

  const sum = () => setCount(count + 1);
  const res = () => setCount(count - 1);

  const changeColor = () => {
    if (
      textColor.length > 3 &&
      textColor.length < 8 &&
      textColor[0] === "#" &&
      textColor.length !== 6
    ) {
      setBackColor(textColor);
    } else {
      alert("El color debe tener 3, 4 o 6 caracteres");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: backColor }]}> 
      {/*Esto es para cuando queremos usar un estilo ya hecho, pero con ligeras modificaciones que no ameritan crear una clase nueva*/}
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Contenedor</Text>
      </View>
      <View style={styles.containerTextAction}>
        <Text style={styles.styleTextAction}>1. Apreta los botones</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btn} onPress={res}>
          <Text style={[styles.textBoton, { color: backColor }]}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={sum}>
          <Text style={[styles.textBoton, { color: backColor }]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCount}>
        <Text style={styles.styleCount}>{count}</Text>
      </View>

      {/*------ Parte opcional -------*/}

      <View style={([styles.containerButtons], { flexDirection: "column" })}>
        <View style={styles.containerTextAction}>
          <Text style={styles.styleTextAction}>2. Ingresa un color</Text>
        </View>
        <TextInput
          style={styles.styleInput}
          onChangeText={(text) => setTextColor(text)}
          value={textColor}
        />
        <TouchableOpacity style={styles.containerButtonChange} onPress={changeColor}>
          <Text style={[styles.styleButtonChange, { color: backColor }]}>Cambiar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#757575",
  },
  containerTitulo: {
    height: 100,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 50,
    color: "#ffffff",
    alignItems: "center",
    fontWeight: "bold",
  },
  containerTextAction: {
    height: 100,
    weight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  styleTextAction: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  containerButtons: {
    height: 80,
    width: "60%",
    flexDirection: "row",
  },
  btn: {
    padding: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2C2C2",
    width: "40%",
    margin: "5%",
    elevation: 10,
    borderRadius: 10,
  },
  textBoton: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  containerCount: {
    height: 100,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  styleCount: {
    fontSize: 35,
    color: "#ffffff",
    alignItems: "center",
    fontWeight: "bold",
  },

  /*------ Parte opcional -------*/
  styleInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    color: "#ffffff",
    fontSize: 18,
    alignSelf: "center",
  },
  
  containerButtonChange: {
    height: 50,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2C2C2",
    margin: "6%",
    elevation: 10,
    borderRadius: 10,
  },
  styleButtonChange: {
    fontSize: 25,
    fontWeight: "bold",
  },

  
});
