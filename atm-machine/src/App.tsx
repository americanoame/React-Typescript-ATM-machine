import { useATMLogic } from './useATMLogic';

import './index.css';

const App: React.FC = () => {
  const { balance, amount, history, setAmount, deposit, withdraw, checkBalance, warning } = useATMLogic();

  return (
    <div className="atm-container">
      <div className="atm">
        <div className="job-text">
          <h2 className="text-center mb-4">
            React-Typescript-<span>ATM-machine</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="atm-screen mb-3">
              <p id="message">Welcome to RealBank.</p>
            </div>
            <div className="mb-3">
              <input type="number" id="amount" className="form-control" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            </div>
            <div className="atm-buttons">
              <button onClick={deposit} className="btn btn-warning mb-2">
                Deposit
              </button>
              <button onClick={withdraw} className="btn btn-secondary mb-2 ms-2">
                Withdraw
              </button>
              <button onClick={checkBalance} className="btn btn-info mb-2 ms-2">
                Check Balance
              </button>
            </div>
          </div>

          <div className="col-md-1 d-flex justify-content-center align-items-center">
            <div className="vertical-line"></div>
          </div>

          <div className="col-md-6">
          <p className={`balance-display ${balance === 0 ? 'red-balance' : ''}`} id="balance">
              Balance: ${balance}
            </p>
            {warning && <p className="warning-message">{warning}</p>}
            <div className="transaction-history mt-3">
              <h3>Transaction History</h3>
              <div className="history-box">
                <ul id="history-list" className="list-group">
                  {history.map((item, index) => (
                    <li key={index} className="list-group-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
