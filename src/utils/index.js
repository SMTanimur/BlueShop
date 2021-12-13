import toast from 'react-hot-toast';
import { toast as Toast } from "react-toastify";
// import bcrypt from 'bcrypt'

export const handleErrorMessage = err =>
  err.response && (err.response.data.message || err.response.data.error)
    ? err.response.data.message || err.response.data.error
    : err.message || err.error;
// Success Alert
export const successAlert = message => message && toast.success(message);
// Error Alert
export const errorAlert = error => error && toast.error(error);

 export const NormalToast = (msg, error) => {
  Toast(
      <div className="font-medium">
          <span className={`${error ? "text-red-500" : ""}`}>{msg}</span>
      </div>,
      {
          position: "top-right",
          autoClose: 4000,
          style: {
              background: "white",
              color: "#1f2937",
              fontFamily: "Poppins, sans-serif",
              height: "auto",
          },
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: true,
          draggablePercent: 25,
      }
  );
};

export default NormalToast;
