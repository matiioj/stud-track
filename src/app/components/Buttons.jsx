"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ studentId }) {
  const router = useRouter();

  return (
    <div className="flex gap-x-2 justify-end mt-2">
      <button
        className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
        onClick={async () => {
          if (confirm("Please confirm that you want to delete this student:")) {
            const res = await axios.delete("/api/students/" + studentId);
            console.log(res)
            if (res.status === 200) {
              router.push("/students");
              router.refresh();
            }
          }
        }}
      >
        Delete
      </button>
      <button
        className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded"
        onClick={() => {
          router.push(`/students/edit/${studentId}`);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default Buttons;