import { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {

    const [amount, setAmount] = useState("");
    const [myBill, setMyBill] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const friendBill = amount ? amount - myBill : "";

    function handleSubmit(e) {
        e.preventDefault();
        if(!amount || !myBill) return;
        onSplitBill(whoIsPaying === "user" ? friendBill : -myBill)
    }



    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>PATUNGAN BARENG {selectedFriend?.name}</h2>
            <label htmlFor="">📄 Total Biaya</label>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            
            <label htmlFor="">📄 Tagihan Kamu</label>
            <input type="text" value={myBill} onChange={(e) => setMyBill(e.target.value)}/>

            <label htmlFor="">📄 Tagihan {selectedFriend.name}</label>
            <input type="text" value={friendBill} disabled/>

            <label htmlFor="">📄 Ditalangi Sama</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">Kamu</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button">Bayar</button>
        </form>
    )
}

export default FormSplitBill;