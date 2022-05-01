import { useState } from "react";
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

  return (
    <AlertStyles>
      <AlertCloseBtnStyles onClick={handleClose}>&times;</AlertCloseBtnStyles>
      {children ? (
        renderElAlert()
      ) : (
        <AlertTextStyles onClick={handleClose}>{message}</AlertTextStyles>
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
  &.hide {
    display: none;
  }
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
