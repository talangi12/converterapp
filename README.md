
#  Binary Converter App

**Project Name:** Binary Converter  
**Group:** 10  
**Version:** 1.0  
**Last Updated:** November 2025  



##  Overview

The **Binary Converter App** is a lightweight, cross-platform mobile application that allows users to easily **convert between binary, decimal, octal, and hexadecimal number systems**.  
It was built with simplicity, accuracy, and educational value in mind — ideal for students, teachers, and developers who work with digital systems.



##  Objectives

- Provide a **simple and accurate** number conversion tool.  
- Enhance **learning and understanding** of number systems.  
- Deliver a **modern and responsive** user experience.  
- Serve as a **teaching aid** for computer science and mathematics students.


##  Technology Stack

| Category               | Technology |
|----------------------- |---------------------------------  |
| Framework              | React Native (Expo)               |
| State Management       | Redux Toolkit                     |
| UI Styling             | React Native Paper / Tailwind CSS |
| Platform Compatibility | Android & iOS                     |
| Build Tools            | Expo EAS                          |
| Version Control        | GitHub                            |


##  Key Features

1. **Bidirectional Conversion** – Instantly convert between binary, decimal, octal, and hexadecimal formats.  
2. **Real-Time Updates** – View conversion results as you type.  
3. **Error Handling** – Detects invalid inputs and displays helpful hints.  
4. **Clean Interface** – Simple UI for both students and professionals.  
5. **Offline Capability** – Can function without constant internet access.  
6. **Cross-Platform** – Works seamlessly on Android and iOS.


##  System Architecture

**Architecture Pattern:** Modular React Native structure with Redux Toolkit for global state.

### Main Components:
- `ConverterScreen.js` – Handles UI and main conversion logic.  
- `InputField.js` – Captures user input.  
- `ResultDisplay.js` – Shows the converted results.  
- `store.js` – Redux store for managing global state.  
- `conversionSlice.js` – Reducers and actions for conversion logic.  
- `App.js` – Entry point integrating navigation and state providers.


##  Conversion Logic

``js
// Example: Binary to Decimal
const binaryToDecimal = (binary) => parseInt(binary, 2);

// Example: Decimal to Binary
const decimalToBinary = (decimal) => decimal.toString(2);


Error validation ensures only valid characters for each number system are accepted.


##  UI/UX Design

* **Style:** Minimalist and clean
* **Primary Color:** Tech-inspired Blue
* **Layout:** Single-page interface
* **Icons:** Binary-inspired app icon
* **Accessibility:** High contrast, large buttons, intuitive layout



##  Development Team

| REGISTRATION   | Member                  |
| -------------- | ----------------------- |
| PA106/G/22801/24 | KLEANNAT CHALVINE     |
| PA106/G/22770/24 | VICTORIA WANJRU       |
| PA106/G/18734/24 | MUGO EPHANTUS         |
| PA106/G/21683/24 | DANIEL GATHANDI       |
| PA106/G/21928/24 |ABINCHA JARED          |


##  Installation & Setup

### Local Development

```bash
# Clone the repository
git clone https://github.com/talangi12/converterpp.git

# Navigate to the project
cd converterapp

# Install dependencies
npm install

# Run the app
npx expo start
```

### Production Build

```bash
eas build --platform all
```
# Android and ios users
install Expo GO app on your devices and follow the link below to install the app on your device
https://expo.dev/artifacts/eas/a2SsRKDmvqs5UZzsuPDAEh.aab


##  Testing

| Type         | Tool          | Description                    |
| ------------ | ------------- | ------------------------------ |
| Unit Testing | Jest          | Tests conversion accuracy      |
| UI Testing   | Expo Go       | Verifies layout and navigation |
| Performance  | Expo Profiler | Measures responsiveness        |



##  Achievements

* Awarded **Best project digital logic** at Kirinyaga University.
* Used by over 20 users in testing and training environments.


##  Future Enhancements

* Add **voice input** for conversions.
* Add **conversion history tracking**.
* Introduce **multi-language support**.
* Deploy a **web-based version** using React + Vite.


##  References

* [Expo Documentation](https://docs.expo.dev/)
* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [React Native Docs](https://reactnative.dev/)


##  Conclusion

The **Binary Converter App** is an innovative and efficient tool designed to simplify number system learning and conversion.
It merges **education and technology** to improve accessibility and understanding for users worldwide.



