import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";


const LikeButton = ({ id, likes }) => {

    const [user] = useAuthState(auth);

    const likesRef = doc(db, "Candidats", id);

    const handleLike = () => {
        if (likes?.includes(user.uid)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.uid),
            })
        } else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.uid),
            })
        }
    };


    return (
        <div className="like-candidate">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    stroke: likes?.includes(user.uid) ? "#FF7B77" : null,
                    fill: likes?.includes(user.uid) ? "#FF7B77" : null,
                }}
                onClick={handleLike}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <span>{likes?.length}</span>
        </div>
    )
}

export default LikeButton