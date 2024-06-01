import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    name: "Exercise",
    tasks: "12 Tasks",
    image: require("./assets/workout.png"),
  },
  { name: "Study", tasks: "5 Tasks", image: require("./assets/study.png") },
  {
    name: "Laundry",
    tasks: "2 Tasks",
    image: require("./assets/washing-machine.png"),
  },
  { name: "Party", tasks: "1 Task", image: require("./assets/dance.png") },
  { name: "Cook", tasks: "2 Tasks", image: require("./assets/cooking.png") },
  {
    name: "Reading",
    tasks: "2 Tasks",
    image: require("./assets/stack-of-books.png"),
  },
  { name: "Work", tasks: "4 Tasks", image: require("./assets/working.png") },
  { name: "Eat", tasks: "4 Tasks", image: require("./assets/iftar.png") },
];

const tasks = [
  "Study - Review notes from last week's lecture",
  "Study - Complete the assigned reading for your next class",
  "Study - Organize study materials and create a study schedule",
  "Eat - Try a new restaurant in town",
  "Eat - Meal prep lunches for the week",
  "Laundry - Wash and fold all the towels and linens",
  "Laundry - Sort clothes by color and do a load of laundry",
  "Party - Send out invitations for the weekend party",
  "Party - Decorate the living room for the party",
  "Reading - Start reading a new novel",
  "Reading - Read a news article on a current event",
  "Cook - Try cooking a new recipe for dinner",
  "Cook - Bake a batch of cookies",
  "Exercise - Go for a 30-minute jog",
  "Exercise - Attend a yoga class",
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <CategorySection />
      <TaskSection />
    </SafeAreaView>
  );
}

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.greeting}>Hello, Devs</Text>
      <Text style={styles.taskInfo}>14 tasks today</Text>
    </View>
    <View style={styles.userIcon}>
      <Image source={require("./assets/person.png")} />
    </View>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBar}>
    <View style={styles.searchInput}>
      <FontAwesomeIcon size={20} icon={faMagnifyingGlass} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
    <View style={styles.filter}>
      <FontAwesomeIcon size={30} color="#fff" icon={faSliders} />
    </View>
  </View>
);

const CategorySection = () => (
  <View style={styles.categories}>
    <Text style={styles.sectionTitle}>Categories</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View style={styles.categoryItem} key={index}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <Text>{category.tasks}</Text>
          <Image style={styles.categoryImage} source={category.image} />
        </View>
      ))}
    </ScrollView>
  </View>
);

const TaskSection = () => (
  <View style={styles.tasksSection}>
    <Text style={styles.sectionTitle}>Ongoing Task</Text>
    <ScrollView style={styles.tasks}>
      {tasks.map((task, index) => (
        <View style={styles.task} key={index}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    padding: 20,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userIcon: {
    backgroundColor: "#FBF9F7",
    borderRadius: 50,
    padding: 2,
  },
  greeting: {
    fontSize: 34,
    fontWeight: "bold",
  },
  taskInfo: {
    fontSize: 16,
    color: "#555",
  },
  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBF9F7",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
  filter: {
    marginLeft: 16,
    backgroundColor: "#F0522F",
    borderRadius: 10,
    padding: 10,
  },
  categories: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  categoryItem: {
    width: 150,
    backgroundColor: "#FBF9F7",
    borderRadius: 20,
    padding: 15,
    marginRight: 20,
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  tasksSection: {
    marginTop: 20,
    flex: 1,
  },
  tasks: {
    marginTop: 10,
  },
  task: {
    backgroundColor: "#FBF9F7",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    borderColor: "#E8D1BA",
    borderWidth: 1,
  },
  taskText: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
