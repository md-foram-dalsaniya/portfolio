import './Wallet.css';
import ABI from "./ABI.json";
import Web3 from "web3";
import { useState } from 'react';

const Wallet = ({ saveState }) => {
    const [connected, setConnected] = useState(true);
    const init = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const contract = new web3.eth.Contract(
                ABI,
                "0xeD3FA98AAB0206fFcA7a7a08a2974553B967DFdB"
            );
            setConnected(false);
            saveState({ web3: web3, contract: contract });
        } catch (error) {

            alert("Please install metamask")
        }
    }

    return <>
        <div className="header">
            {false && <button className="connectBTN">
                {/* <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a> */}
            </button>}
            <button className="connectBTN" onClick={init} disabled={!connected}>{connected? "Connect Metamask":"connected"}</button>
        </div>
    </>
}
export default Wallet;