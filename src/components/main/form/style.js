import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    paddingLeft: 10,
    margin: 12,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0049",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    color: "#ff0000",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResults: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  listImc: {
    marginTop: 20,
    maxHeight: "30%",
  },
  textItemImc: {
    fontSize: 18,
    color: "#ff0043",
    fontWeight: "bold",
  },
});

export default styles;
