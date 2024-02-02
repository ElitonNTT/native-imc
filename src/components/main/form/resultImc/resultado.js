import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";
export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Seu IMC é igual: ${props.resultImc}`,
    });
  };

  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
      <TouchableOpacity onPress={onShare} style={styles.shareButton}>
        <Text style={styles.shareText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
}
