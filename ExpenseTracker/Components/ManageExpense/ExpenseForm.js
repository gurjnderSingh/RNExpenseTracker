import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GlobalColor from '../../constants/style';
import Input from './Input';
import Button from '../UI/Button';

function ExpenseForm({submitButtonLabel ,onCancel, onSubmit}) {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    //setInputValues(()=>{}) // func form to update state on previous state
    setInputValues(currentInputValues => { //currentInputValues obj we will retrun update currentInputValues obj
      return {
        ...currentInputValues, // spread all input values
        [inputIdentifier]: enteredValue, // override one value we want to change dynamically
      };
    });
  }
  function submitHandler(){}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.container}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />

        <Input
          style={styles.rowInput}
          label={'Date'}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
          //   autoCapitalize: 'none'
          //   autocorrect: false,
        }}
      />
        <View style={styles.buttonContiner}>
        <Button
          style={styles.button}
          mode={'flat'}
          onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;
const styles = StyleSheet.create({
  buttonContiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 140,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: GlobalColor.colors.blue,
    marginVertical: 2,
    textAlign: 'center',
  },
  form: {
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
  },
  rowInput: {
    flex: 1,
  },
});