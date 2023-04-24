import React from 'react';

class Cartitem extends React.Component {
  constructor(){
    super();
    this.state={
      price : 999,
      Qty : 1,
      title: 'Mobile Phone',
      img :''
    }
  }
  render () {
    const {price, Qty, title} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt=""/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {Qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
            <img alt="decrease" className='action-icons' src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-minus-vector-icon-png-image_963967.jpg"/>
            <img alt="delete" className='action-icons' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UfwSwsJhC_6oWiAKwZup8Lb1E2sv2LpK6ecHNcI6A&usqp=CAU&ec=48665699"/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default Cartitem;