import { useState } from "react";

import ListTeman from "./components/ListTeman";
import TambahTeman from "./components/TambahTeman";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // fungsi untuk menampilkan dan menyembunyikan form tambah teman
  function handleAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);

    // mengembalikan setSelectedFriend ke null agar form patungan tertutup pad saat tombol tambah teman ditekan
    setSelectedFriend(null);
  }

  // fungsi untuk menambahkan teman baru
  function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  // fungsi ketika tombol pilih pada teman di pencet
  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );

    // mengembalikan setshowaddfried ke false agar form tambah teman tertutup pad saat tombol pilih ditekan
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value
          };
        }
        return friend;
      })
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ListTeman
          friends={friends}
          onSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {/* kondisi untuk menampilkan dan menyembunyikan form tambah teman */}
        {showAddFriend && <TambahTeman onAddNewFriend={handleAddNewFriend} />}
        <button className="button" onClick={handleAddFriend}>
          {!showAddFriend ? "Tambah Teman" : "Tutup"}
        </button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;
