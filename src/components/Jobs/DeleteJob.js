import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";

const DeleteJob = ({ id, imageUrl }) => {

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                if (id && !imageUrl) {
                    await deleteDoc(doc(db, "Jobs", id));
                }
                if (id && imageUrl) {
                    await deleteDoc(doc(db, "Jobs", id));
                    const storageRef = ref(storage, imageUrl);
                    await deleteObject(storageRef);
                }
            } catch (error) {
            }
        }
    };

    return (
        <div onClick={handleDelete}>
            <img src="./img/icons/trash.svg" alt="trash" />
        </div>
    )
}

export default DeleteJob