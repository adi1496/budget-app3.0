import AbstractView from "./absractView.js";

class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle('Budget App | Dashboard');
    }

    async getHTML() {
        return `<nav class="nav">
        <select class="month" name="months-list" id="months-list">
        </select>
        <div class="user-box">
            <img src="img/user.png" alt="user-img" class="user-img">
            <button class="logout-btn" id="logout-btn">Logout</button>
        </div>
    </nav>
    
    <button class="add-fixed-btn income-btn" id="income-btn">+</button>
    <button class="add-fixed-btn expense-btn" id="expense-btn">-</button>
    
    <header class="header">
        <div class="logo">
            <h1 class="heading-1">Budget</h1>
            <h1 class="heading-1">APP</h1>
        </div>
    
        <!-- <h2 class="heading-2">Your Budget <span id="heading-month">December 2020</span></h2> -->
        <div class="balance">Your Balance: <span class="balance-value" id="balance-value"></span> <span class="balance-value" id="curency">€</span></div>
    
        <div class="box-bar">
            <div class="box-bar-text">Income:</div>
            <div class="box-bar-sign">+</div>
            <div class="box-bar-value"><span id="income-month"></span> <span id="curency">€</span></div>
        </div>
        <div class="box-bar box-bar-red">
            <div class="box-bar-text">Expenses:</div>
            <div class="box-bar-sign">-</div>
            <div class="box-bar-value"><span id="expense-month"></span> <span id="curency">€</span></div>
            <div class="box-bar-percent" id="expense-month-percent"></div>
        </div>
    </header>
    
    <section class="section-list">
        <div class="section-list-box">
            <h3 class="heading-3 heading-3-blue">Incomes</h3>
            <ul class="list incomes-list" id="incomes-list">
                
            </ul>
        </div>
    
    
        <div class="section-list-box">
            <h3 class="heading-3 heading-3-red">Expenses</h3>
            <ul class="list expenses-list" id="expenses-list">
            
            </ul>
        </div>
    
    </section>`;
    }
};

export default Dashboard;