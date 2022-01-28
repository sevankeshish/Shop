import "./App.css";
import { useState, useEfect } from "react";
import { db } from "./test";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEfect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
