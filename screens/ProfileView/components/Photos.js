import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { gs } from "../../../styles";
import PhotoView from "./PhotoView";

const photos = [
  {
    imageRequire: require("../../../assets/travel1.jpg"),
    url: "../../../assets/travel1.jpg",
  },
  {
    imageRequire: require("../../../assets/travel2.jpg"),
    url: "../../../assets/travel2.jpg",
  },
  {
    imageRequire: require("../../../assets/travel3.jpg"),
    url: "../../../assets/travel3.jpg",
  },
  {
    imageRequire: require("../../../assets/travel4.jpg"),
    url: "../../../assets/travel4.jpg",
  },
  {
    imageRequire: require("../../../assets/travel5.jpg"),
    url: "../../../assets/travel5.jpg",
  },
  {
    imageRequire: require("../../../assets/travel6.jpg"),
    url: "../../../assets/travel6.jpg",
  },
  {
    imageRequire: require("../../../assets/travel7.jpg"),
    url: "../../../assets/travel7.jpg",
  },
  {
    imageRequire: require("../../../assets/travel8.jpg"),
    url: "../../../assets/travel8.jpg",
  },
];

function Photos(props) {
  // setState variable
  const [imageURI, setImageURI] = useState(null);
  const [imageModal, setImageModal] = useState(false);

  return (
    <View style={[gs.sectionContainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>My Photos</Text>
      <View style={styles.photosContainer}>
        {photos.map((photo, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setImageModal(!imageModal);
                setImageURI(photo.imageRequire);
              }}
            >
              <Image
                source={photo.imageRequire}
                key={index}
                style={[
                  styles.photo,
                  { marginRight: (index + 1) % 3 === 0 ? 0 : 12 },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* This is where modal execute, we calling child component */}
      <PhotoView
        modalChecking={() => {
          // This is where callback function call from child component
          setImageModal(false);
          setImageURI(null);
        }}
        modalStatus={imageModal}
        imageuri={imageURI}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  photo: {
    width: 95,
    height: 95,
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default Photos;
