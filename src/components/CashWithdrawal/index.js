// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0)
    return (
      <div className="bg-container">
        <div className="card">
          <div className="heading-container">
            <p className="para1">S</p>
            <p className="heading">{initial}</p>
          </div>
          <div className="container-2">
            <p className="para2">Your Balance</p>
            <div>
              <p className="amount">
                {balance} <br /> <span id="para3">in Rupees</span>
              </p>
            </div>
          </div>
          <p className="heading2">Withdraw</p>
          <p className="para4">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-List">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
