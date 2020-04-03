import React from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import PropTypes from "prop-types";
import { scaledHeight,getCustomStyle } from './Utils';
//import { GIcon } from './GIcon';
//import Images from '../Images/ImageIndex';
//import gblStrings from '../Constants/GlobalStrings';

/* **************************\
  Function: GInputComponent
  Explanation:
  Custom component for Input Field, where ever in project need of
  Input Fields this can be resued by giving  props value
\************************** */

export const styles = StyleSheet.create({

  arrowIconStyle: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  errorSection: {
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: scaledHeight(5)
  },
  errorSectionText: {
    color: 'red',
    fontSize: scaledHeight(12)
  },
  errorView: {
    // marginLeft:'4%',
    // marginRight:'4%',
    borderColor: 'red'
  },

  inputBoxErrViewStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "red",
    borderWidth: 1,
    elevation: 2,
    height: scaledHeight(52),
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: '92%',
  },
  inputBoxStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D2D2D2",
    borderWidth: 1,
    elevation: 2,
    height: scaledHeight(52),
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: '92%',
  },
  logoPasswordStyle: {
    alignSelf: 'center',
    left: 15,
    position: 'absolute',
  },
  logoStyle: {
    alignSelf: 'center',
    left: 15,
    position: 'absolute',
  },
  logoStyleEye: {
    alignSelf: 'center',
    position: 'absolute',
    right: 15,
  },
  textInputStyle: {
    alignItems: 'center',
    color: '#49494A',
    fontSize: scaledHeight(14),
    height: scaledHeight(52),
    justifyContent: 'center',
    paddingLeft: scaledHeight(14)
  }
});

export const GInputComponent = (props) => {

  const {errorFlag,propInputStyle,inputStyle,value,secureTextEntry,autoFocus,editable,onBlur,onChange,onChangeText,
    onSubmitEditing,onFocus,onKeyPress,keyboardType,returnKeyType,maxLength,multiline,numberOfLines,placeholder,
    placeholderTextColor,selectionColor,autoCapitalize,dropDownBox,arrowIconStyle,dropDownClick, inputref, blurOnSubmit,
    errorText, underlineColorAndroid,loginOnlineId,loginPassword,accessible,accessibilityLabel,passwordToggle,fundSearchBox} = props;
return(
  <>
    <View style={errorFlag ? getCustomStyle(styles.inputBoxErrViewStyle, propInputStyle) : getCustomStyle(styles.inputBoxStyle, propInputStyle)}
       // accessible={gblStrings.isIOSPlatform ? false : accessible}
        accessibilityLabel={accessibilityLabel}
       // accessibilityHint={secureTextEntry ? gblStrings.accessibleStrings.common.securetextfield : gblStrings.accessibleStrings.common.textfield}
    >
      <TextInput
        ref={inputref}
        style={getCustomStyle(styles.textInputStyle, inputStyle)}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoFocus={autoFocus}
        editable={editable}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        blurOnSubmit={blurOnSubmit}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        underlineColorAndroid={underlineColorAndroid}
        autoCapitalize={autoCapitalize}
        importantForAccessibility="yes"
        //accessible={!!gblStrings.isIOSPlatform}
        accessibilityLabel={accessibilityLabel}
      />
      
      {dropDownBox ? (
        <TouchableOpacity style={getCustomStyle(styles.arrowIconStyle, arrowIconStyle)} onPress={dropDownClick}>
          <GIcon
            name="md-arrow-dropdown"
            type="ionicon"
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )
        :
        null}
        {loginOnlineId ? (        
          <Image style={styles.logoStyle} source={Images.onlineIdprofile} />  
        ):null}
         {fundSearchBox ? (        
          <Image style={styles.logoStyle} source={Images.searchBlue} />  
        ):null}
         {loginPassword ? (        
          <Image style={styles.logoPasswordStyle} source={Images.onlineIdpassword} />  
        ):null}   
        {loginPassword ? (        
          <TouchableOpacity style={styles.logoStyleEye} onPress={passwordToggle} accessibilityRole="button">        
            <GIcon
              name="eye"
              type="simple-line-icon"
              size={20}
              color="black"
            />
            {/* <Image source={Images.onlineIdpassword} />   */}
          </TouchableOpacity>
        ) : null}
    </View>
      {(errorFlag && errorText) ? (
        <View style={styles.errorSection}>
          <Text style={styles.errorSectionText}>
            {errorText}
          </Text>
        </View>
      ) : null}
  </>
  );
};

GInputComponent.propTypes = {
  inputref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  inputStyle: PropTypes.instanceOf(Object),
  arrowIconStyle: PropTypes.instanceOf(Object),
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  selectionColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  autoCapitalize: PropTypes.string,
  onFocus: PropTypes.func,
  dropDownClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  propInputStyle: PropTypes.instanceOf(Object),
  dropDownBox: PropTypes.bool,
  errorFlag: PropTypes.bool,
  errorText: PropTypes.string,
  loginOnlineId: PropTypes.bool,
  loginPassword: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  accessible: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  passwordToggle: PropTypes.func,
  fundSearchBox:PropTypes.bool
};

GInputComponent.defaultProps = {
  inputref: () => { },
  inputStyle: {},
  arrowIconStyle: {},
  value: '',
  autoFocus: false,
  editable: true,
  keyboardType: "default",
  returnKeyType: "next",
  onBlur: () => { },
  onChange: () => { },
  onChangeText: () => { },
  onSubmitEditing: () => { },
  maxLength: 100,
  multiline: false,
  numberOfLines: 1,
  placeholder: "",
  placeholderTextColor: null,
  selectionColor: null,
  underlineColorAndroid: "transparent",
  autoCapitalize: "none",
  secureTextEntry: false,
  onFocus: () => { },
  dropDownClick: () => { },
  onKeyPress: () => { },
  propInputStyle: {},
  dropDownBox: false,
  errorFlag: false,
  errorText: '',
  loginOnlineId: false,
  loginPassword: false,
  blurOnSubmit: false,
  accessible: true,
  accessibilityLabel: "",
  passwordToggle: () => { },
  fundSearchBox:false

};

export default GInputComponent;