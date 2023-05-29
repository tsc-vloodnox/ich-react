import React from "react";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";

const DeleteJob = ({ id, imageUrl, catId }) => {

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                if (id && !imageUrl) {
                    await deleteDoc(doc(db, "Jobs", id));
                }
                if (id && imageUrl && catId) {
                    await deleteDoc(doc(db, "Jobs", id));
                    const storageRef = ref(storage, imageUrl);
                    await deleteObject(storageRef);
                    const categoryRef = doc(db, "Category", catId);
                    const categoryDoc = await getDoc(categoryRef);
                    const currentJobCount = categoryDoc.data().jobCount;
                    const newJobCount = currentJobCount - 1;
                    await updateDoc(categoryRef, { jobCount: newJobCount });
                }
            } catch (error) {
            }
        }
    };

    return (
        <div onClick={handleDelete} className="delete-job">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
        </div>
    )
}

export default DeleteJob