import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Modal, Image } from "react-native";

function PhotoView({ modalChecking, modalStatus, imageuri }) {
  //This is where the execution has been made
  const [modalVisible, setModalVisible] = useState(modalStatus);

  useEffect(() => {
    setModalVisible(modalStatus);
  }, [modalStatus]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          // When close the modal, we initiate callback function modalchecking
          modalChecking();
        }}
      >
        <View
          style={{
            backgroundColor: "#000",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={imageuri}
            style={{ aspectRatio: 1, resizeMode: "contain" }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PhotoView;
