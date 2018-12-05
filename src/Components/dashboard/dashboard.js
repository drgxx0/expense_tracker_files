import React, { useState, useEffect } from 'react'
import NavBar from 'Components/dashboard/navbar/navbar'
import Modal from 'Components/UI/modal/modal'
import AddExpense from 'Components/dashboard/addexpense/addExpense'
import ExpenseLog from 'Components/dashboard/expenseLog/expenseLog'
import Profile from 'Components/dashboard/profile/profile'
import Chart from 'Components/dashboard/chart/Chart'
import AddFund from 'Components/dashboard/addfun/AddFun'
import Footer from 'Components/footer/footer'

import './dashboard.css'


const Dashboard = (props) => {
    const monthArr = ['Ene', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const [modal, setModal] = useState(false)
    const [xp, setXp] = useState([])
    const [modalRoute, setModalRoute] = useState('')

    const [total, setTotal] = useState(0)
    const [currency, setCurrency] = useState('USD')

    useEffect(() => {
        if(total === 0) {
            setModal(true)
            setModalRoute('addFund')
            } 
    },
    [total])

    const handleModal = (stat, name) => {
        setModal(stat)
        setModalRoute(name)
    }

    const addingExpense = (desc, sp) => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const monthLetter = monthArr[month]

        const result = {
            id: Math.floor(Math.random() * 1000) + 1,
            date: {
                day,
                month: monthLetter
            },
            detail: desc,
            sp: parseInt(sp)
        }
        setXp([
            ...xp,
            result
        ])
        setTotal(total + result.sp)
    }

    const addingFund = (fund) => {
        setTotal(total+fund)
    }

    const deleteLog = (id, sp) => {
        const filter = xp.filter(logs => {
            return id !== logs.id
        })
        setXp(filter)
        setTotal(total + sp)
    }

    const changeCurrency = () => {
        if (currency === 'USD') {
            setTotal(total*3.37)
            setCurrency('PEN')
            const change = xp.reduce((acc, data) => {
               const info = {
                   ...data,
                   sp: data.sp * 3.37
               }
                return acc.concat(info)
            }, [])
            setXp(change)
        } else if (currency === 'PEN') {
            setTotal(total/3.37)
            setCurrency('USD')
            const change = xp.reduce((acc, data) => {
                const info = {
                    ...data,
                    sp: data.sp / 3.37
                }
                 return acc.concat(info)
             }, [])
             setXp(change)
        }
    }

    const orderXp = xp.sort((a,b) => b.id - a.id)
    const mapXpLog = orderXp.map((info, i) => {
        return <ExpenseLog 
        xp={xp} 
        deleteLog={deleteLog} 
        currency={currency} 
        date={xp[i].date} 
        detail={xp[i].detail} 
        sp={xp[i].sp} 
        id={xp[i].id} 
        key={i} />
    })

    const jsx = (
        <div className='dashboard'>
            <NavBar />
            <div className='counter'>
                <div className='text'>
                    {currency === 'PEN' ? 'S/.' : null}
                        {total}
                    {currency === 'PEN' ? null : '$'}
                </div>
                <p 
                style={{width: '237px',textDecoration: 'underline', 
                color: 'blue', 
                cursor: 'pointer'}} 
                onClick={changeCurrency}
                >
                    {currency === 'PEN' ? 
                    'change currency to USD' : 
                    'change currency to PEN'}
                </p>
                <div className='countBt' onClick={() => handleModal(true, 'expense')}>+</div>
            </div>
            <div className='profile'>
                <Profile user={props.user} />
            </div>
            <div className='add'>
                <AddExpense addingExpense={addingExpense} />
            </div>
            <div className='graph'><Chart total={total} xp={xp} /></div>
            <div className='log'>
                {xp.length >= 1 ?
                     mapXpLog :
                      <p style={{textAlign: 'center'}}>You don't have any expense registered</p>
                      }         
            </div>
            <Footer />
        </div>
    )

    return (
    <React.Fragment>
{modal ?
        <React.Fragment>
            <Modal onCloseModal={handleModal}>
                {modalRoute === 'expense' ? 
                    <AddExpense 
                    onCloseModal={handleModal} 
                    addingExpense={addingExpense} /> : 
                modalRoute === 'addFund' ? 
                 <AddFund 
                 onCloseModal={handleModal} 
                 addingExpense={addingExpense} 
                 addingFund={addingFund} /> 
                : null}
            </Modal>
            {jsx}
        </React.Fragment> 
    : jsx
    }
    </React.Fragment>
    )
}


export default Dashboard