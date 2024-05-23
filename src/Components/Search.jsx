import Loader from './Loader';
import './Search.css';
import { useState } from 'react';

export default function Search({ setData, pincode, setPincode, setShow }) {
    const [error, setError] = useState(false);
    const [errormsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (pincode.length !== 6) {
            setError(true);
            setErrorMsg("Please provide a valid 6-digit pincode.");
            return;
        }

        setLoading(true);
        setError(false);
        setErrorMsg("");

        try {
            const response = await fetch(
                `https://api.postalpincode.in/pincode/${pincode}`
            );
            const data = await response.json();

            if (data[0].Status !== "Success") {
                throw new Error(data[0].Message || "Invalid pincode.");
            }

            setShow(data[0]);
            setData(true);
        } catch (err) {
            setError(true);
            setErrorMsg(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='zero'>
            <form onSubmit={handleSubmit}>
                <h1>Enter Pincode</h1>
                <div className='one'>
                    <input
                        type="number"
                        value={pincode}
                        onChange={(e) => {
                            setPincode(e.target.value);
                            setError(false); // Clear error on input change
                            setErrorMsg("");
                        }}
                        placeholder="Enter 6-digit pincode"
                    />
                    <button type='submit'>Lookup</button>
                </div>
            </form>
            {error && <p style={{ color: "red", fontSize: "24px" }}>{errormsg}</p>}
            {loading && <Loader />}
        </div>
    );
}
