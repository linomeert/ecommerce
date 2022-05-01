import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

export default function Alert({
  children,
  type,
  message,
  isShowAlert,
  setIsShowAlert,
}) {
  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    console.log("close");
    e.preventDefault();
    setIsShowAlert(false);
  };

  if (!isShowAlert) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowAlert(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AlertStyles classa>
      <AlertCloseBtnStyles
        onClick={handleClose}
        onTransitionEnd={() => setIsShowAlert(false)}
      >
        &times;
      </AlertCloseBtnStyles>
      {children ? (
        renderElAlert()
      ) : (
        <AlertTextStyles onPress={handleClose}>{message}</AlertTextStyles>
      )}
    </AlertStyles>
  );
}

const AlertStyles = styled.View`
  background-color: #6ece84;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

const AlertTextStyles = styled.Text`
  color: white;
  margin-right: 10px;
`;

const AlertCloseBtnStyles = styled.Text`
  padding: 5px;
  color: white;
  font-size: 20px;
`;
