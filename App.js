import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [system, setSystem] = useState('decimal');
  const [input, setInput] = useState('');
  const [bin, setBin] = useState('0');
  const [dec, setDec] = useState('0');
  const [hex, setHex] = useState('0');
  const [oct, setOct] = useState('0');

  useEffect(() => {
    convertAll(input, system);
  }, [input, system]);

  function clearAll() {
    setInput('');
    setBin('0');
    setDec('0');
    setHex('0');
    setOct('0');
  }

  function convertAll(value, from) {
    if (!value || value.trim() === '') {
      setBin('0'); setDec('0'); setHex('0'); setOct('0');
      return;
    }

    const trimmed = value.trim();
    try {
      let decimalValue = 0;

      switch (from) {
        case 'binary':
          if (!/^[01]+$/.test(trimmed)) throw new Error('Binary digits only');
          decimalValue = parseInt(trimmed, 2);
          break;
        case 'decimal':
          if (!/^[0-9]+$/.test(trimmed)) throw new Error('Decimal digits only');
          decimalValue = parseInt(trimmed, 10);
          break;
        case 'hex':
          if (!/^[0-9a-fA-F]+$/.test(trimmed)) throw new Error('Hex digits only');
          decimalValue = parseInt(trimmed, 16);
          break;
        case 'octal':
          if (!/^[0-7]+$/.test(trimmed)) throw new Error('Octal digits only');
          decimalValue = parseInt(trimmed, 8);
          break;
        default:
          decimalValue = 0;
      }

      if (!Number.isFinite(decimalValue)) throw new Error('Invalid number');

      setDec(String(decimalValue));
      setBin(decimalValue.toString(2));
      setHex(decimalValue.toString(16).toUpperCase());
      setOct(decimalValue.toString(8));
    } catch (e) {
      setDec('Invalid');
      setBin('Invalid');
      setHex('Invalid');
      setOct('Invalid');
    }
  }

  function placeholderForSystem(s) {
    switch (s) {
      case 'binary': return 'Enter binary (0-1)';
      case 'decimal': return 'Enter decimal (0-9)';
      case 'hex': return 'Enter hex (0-9, A-F)';
      case 'octal': return 'Enter octal (0-7)';
      default: return '';
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>📟 Converter</Text>
        <Text style={styles.subtitle}>Convert numbers between Binary, Decimal, Hexadecimal, and Octal number systems instantly</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Input Number</Text>
          <Text style={styles.cardSmall}>Select a number system and enter your number to convert</Text>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Number System</Text>
              <View style={styles.pickerWrapper}>
                <Picker selectedValue={system} onValueChange={(v) => { setSystem(v); setInput(''); }}>
                  <Picker.Item label="Binary (Base 2)" value="binary" />
                  <Picker.Item label="Decimal (Base 10)" value="decimal" />
                  <Picker.Item label="Hexadecimal (Base 16)" value="hex" />
                  <Picker.Item label="Octal (Base 8)" value="octal" />
                </Picker>
              </View>
            </View>

            <TouchableOpacity onPress={clearAll} style={styles.clearButton}>
              <Text style={styles.clearText}>⟲ Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.inputCard, styles.inputCardActive]}> 
            <Text style={styles.inputCardTitle}>{system === 'binary' ? 'Binary (Base 2)' : system === 'decimal' ? 'Decimal (Base 10)' : system === 'hex' ? 'Hexadecimal (Base 16)' : 'Octal (Base 8)'}</Text>
            <Text style={styles.inputLabel}>Input</Text>
            <TextInput
              style={styles.textInput}
              placeholder={placeholderForSystem(system)}
              value={input}
              onChangeText={setInput}
              keyboardType={system === 'decimal' || system === 'octal' ? 'numeric' : 'default'}
              autoCapitalize="characters"
              autoCorrect={false}
            />
          </View>
        </View>

        <Text style={styles.resultsHeader}>Conversion Results</Text>
        <Text style={styles.resultsSub}>Your number converted to all supported number systems</Text>

        <View style={styles.resultCardGreen}>
          <Text style={styles.resultTitle}>Binary (Base 2)</Text>
          <View style={styles.resultBox}><Text style={styles.resultText}>{bin}</Text></View>
        </View>

        <View style={styles.resultCardWhite}>
          <Text style={styles.resultTitle}>Decimal (Base 10)</Text>
          <View style={styles.resultBox}><Text style={styles.resultText}>{dec}</Text></View>
        </View>

        <View style={styles.resultCardGreen}>
          <Text style={styles.resultTitle}>Hexadecimal (Base 16)</Text>
          <View style={styles.resultBox}><Text style={styles.resultText}>{hex}</Text></View>
        </View>

        <View style={styles.resultCardGreen}>
          <Text style={styles.resultTitle}>Octal (Base 8)</Text>
          <View style={styles.resultBox}><Text style={styles.resultText}>{oct}</Text></View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Binary (Base 2)</Text>
          <Text style={styles.infoText}>Uses digits: 0, 1</Text>

          <Text style={[styles.infoTitle, { marginTop: 8 }]}>Decimal (Base 10)</Text>
          <Text style={styles.infoText}>Uses digits: 0-9</Text>

          <Text style={[styles.infoTitle, { marginTop: 8 }]}>Hexadecimal (Base 16)</Text>
          <Text style={styles.infoText}>Uses: 0-9, A-F</Text>

          <Text style={[styles.infoTitle, { marginTop: 8 }]}>Octal (Base 8)</Text>
          <Text style={styles.infoText}>Uses digits: 0-7</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 18,
    backgroundColor: '#f6f8fb',
  },
  logo: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2b63ff',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    color: '#4b5563',
    marginBottom: 18,
    fontSize: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  cardSmall: { color: '#6b7280', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  pickerWrapper: { borderWidth: 1, borderColor: '#e6eef9', borderRadius: 8, overflow: 'hidden' },
  clearButton: { marginLeft: 12, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#eef4ff' },
  clearText: { color: '#334155' },
  inputCard: { borderRadius: 12, padding: 12, marginTop: 8, borderWidth: 1, borderColor: '#e6eef9' },
  inputCardActive: { borderColor: '#2dbf74' },
  inputCardTitle: { fontWeight: '700', marginBottom: 6 },
  inputLabel: { color: '#6b7280', marginBottom: 6 },
  textInput: { backgroundColor: '#f3f6f9', padding: 12, borderRadius: 8, fontSize: 16, fontFamily: Platform.OS === 'ios' ? undefined : undefined },

  resultsHeader: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginTop: 6 },
  resultsSub: { textAlign: 'center', color: '#6b7280', marginBottom: 12 },

  resultCardGreen: { borderWidth: 2, borderColor: '#1dbf75', borderRadius: 12, padding: 14, marginVertical: 8, backgroundColor: '#fff' },
  resultCardWhite: { borderWidth: 1, borderColor: '#e6eef9', borderRadius: 12, padding: 14, marginVertical: 8, backgroundColor: '#fff' },
  resultTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  resultBox: { backgroundColor: '#f3f6f9', padding: 14, borderRadius: 8 },
  resultText: { fontSize: 16 },

  infoBox: { backgroundColor: '#eef6ff', padding: 14, borderRadius: 8, marginTop: 10 },
  infoTitle: { fontWeight: '700', color: '#1f3c88' },
  infoText: { color: '#134e96' },
});
