import Teman from "./Teman";

function ListTeman({friends, onSelected, selectedFriend}) {
    return (
        <ul>
            {friends.map((friend) => (
                <Teman key={friend.id} friend={friend} onSelected={onSelected} selectedFriend={selectedFriend}/>
            ))}
        </ul>
    )
}

export default ListTeman;