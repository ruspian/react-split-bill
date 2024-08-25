import { useState } from "react";

function TambahTeman({ onAddNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");


  // fungsi ketika form di submit maka akan menambahkan teman baru
  function handleSubmit(e) {
    e.preventDefault();

    // validasi atau mengecek apakah ada yang kosong kalau kosong tidak melakukan apapun
    if(!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };
    onAddNewFriend(newFriend);
    setName("");
    setImage("");
  }


  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">🤡 Nama</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">📷 Gambar</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">
        Tambah
      </button>
    </form>
  );
}

export default TambahTeman;
