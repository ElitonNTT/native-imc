import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Vibration,
  Pressable,
  FlatList,
} from "react-native";
import { React, useState } from "react";
import ResultImc from "./resultImc/resultado";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha os campos!");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  console.log(imcList);

  const imcCalculator = () => {
    let heightFormat = height.replace(",", ".");

    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((array) => [
      ...array,
      { id: new Date().getTime(), imc: totalImc },
    ]);

    setImc(totalImc);
  };

  const verifyInputs = () => {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Preencha os campos!");
      return;
    }
  };

  const validateImc = () => {
    if (weight != null && height != null) {
      imcCalculator();
      setWeight(null);
      setHeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente!");
      setErrorMessage(null);
      Keyboard.dismiss();
    } else {
      verifyInputs();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha os campos!");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable style={styles.form} onPress={Keyboard.dismiss}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            placeholder="Ex: 1.75"
            keyboardType="numbers-and-punctuation"
            onChangeText={setHeight}
            value={height}
            style={styles.input}
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            placeholder="Ex: 65.6"
            keyboardType="numbers-and-punctuation"
            onChangeText={setWeight}
            value={weight}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => validateImc()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResults}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            onPress={() => validateImc()}
            style={{
              ...styles.buttonCalculator,
              paddingHorizontal: 14,
              marginLeft: 0,
              marginTop: 0,
            }}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={styles.listImc}
        data={[...imcList].reverse()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textItemImc}>Resultado IMC: {item.imc}</Text>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      ></FlatList>
    </View>
  );
}
