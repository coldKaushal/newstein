import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { CATEGORY } from "../../data/genre";
import { AuthContext } from "../../store/authContext";
import { GetCategories, UpdateCategories } from "../../utilities/peferenceAPI";

function Settings() {
  const authCtx = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const email = authCtx.email;

  function createItem({ item }) {

    function handlePress(){
      if(categories.includes(item)){
        setCategories(categories.filter(value => item!==value));
      }else{
        setCategories(categories.concat(item));
      }
    }

    return (
      <Pressable onPress={handlePress}>
        <View style={[styles.itemWrapper, categories.includes(item) && styles.selectedItem]}>
          <Text style={categories.includes(item) && styles.selectedItemTitle}>{item}</Text>
        </View>
      </Pressable>
    );
  }

  function FetchCategories() {
    GetCategories(email)
      .then((res) => {
        console.log("data fetched");
        const data = res.data;
        if (data !== "no data found") {
          console.log(data);
          console.log(data.categories);
          setCategories(data.categories);
        } else {
          console.log("no data found");
        }
      })
      .catch((err) => console.log(err));
  }
  function SetCategories() {
    UpdateCategories(email, categories)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    try {
      FetchCategories();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(()=>{
    SetCategories();
  }, [categories])

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Categories</Text>
      <Text>Select the tiles to view the articles of only that category</Text>
      <FlatList
        data={CATEGORY}
        renderItem={createItem}
        numColumns={3}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={{ flexWrap: "wrap" }}
      />
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemWrapper: {
    margin: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  selectedItem:{
    backgroundColor: "#0075ff",
    borderWidth: 0,
    elevation: 8,
  },
  selectedItemTitle:{
    color: 'white',
  }
});
