console.clear();//automatically clears all of the content in the console.
//BEGIN: ACTION CREATOR AND ACTION=======================
//people dropping off a form to create a Policy: Action Creator
const createPolicy = (name, amount) => {
  //Creates an Action(Form) which will have a type and payload
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}
//people dropping off a form to DeletePolicy: Action Creator
const deletePolicy = (name) => {
  //Creates an Action(Form) which will have a type and payload
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

//people dropping off a form to create a claim: Action Creator
const createClaim = (name, amountOfMoneyToCollect) => {
  //Creates an Action(Form) which will have a type and payload
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}
//END: ACTION CREATOR AND ACTION=======================

//BEGIN: DISPATCH=======================
//dispatch is part of the Redux library(Built-in) so no need to create one, we'll see it later
//END: DISPATCH=======================

//BEGIN: REDUCERS=======================
//this first time the Reducer gets called, the data will be undefined/null
//therefore pass a default value, in case it's undefined. eg: oldListOfClaims = []
const claimsHistoryReducer = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM') {
    //we care about this action(form)
    return [...oldListOfClaims, action.payload];
    //ES6: Return a new Array of elements, including oldListOfClaims[] and the new action object.
    //oldListOfClaims.push(action.payload)//modifies the existing Array. WE DON'T WANT THIS
    //100% OF THE TIME, WE WANT TO CREATE & RETURN A NEW ARRAY.
    //so the old JS equivalet would be: 
    //const newArray = oldListOfClaims.slice();//Creates a new Array using the oldListOfClaims's contents
    //newArray.push(action.payload)
    //return newArray;
  } else {
    //if we don't care about the type, then return the oldListOfClaims unmodified
    return oldListOfClaims;
  }
}

//this first time the Reducer gets called, the data will be undefined/null
//therefore pass a default value, in case it's undefined. eg:
//our company will initially have 100 dollars
const accountingReducer = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    //we need to give them the money they are claiming
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    //we need to add the money they are paying
    return bagOfMoney + action.payload.amount;
  } else {
    return bagOfMoney;//else return the amount of money the company has unmodified.
  }
}

//this first time the Reducer gets called, the data will be undefined/null
//therefore pass a default value, in case it's undefined. eg: oldListOfPolicies = []
const policyHistoryReducer = (oldListOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    //add the new person's name to the list
    return [...oldListOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    //delete the new person's name from the list
    const newArray = oldListOfPolicies.filter((element)=>{return element !== action.payload.name;});
    return newArray;
  } else {
    return oldListOfPolicies;
  }
}
//END: REDUCERS=======================

//BEGIN: STORE=======================
const { createStore, combineReducers } = Redux;
//wire up all together
const ourDepartmentsReducers = combineReducers({
  claimsHistoryReducer,//claimsHistoryReducer: claimsHistoryReducer
  accountingReducer,//accountingReducer: accountingReducer
  policyHistoryReducer//claimsHistoryReducer: claimsHistoryReducer
});
const store = createStore(ourDepartmentsReducers);
//store; -> Object: contains references to all Reducers, all the States AND Data produced by them.
//END: STORE=======================

//BEGIN: DISPATCH=======================
//1st create an action using the Action Creator functions we defined above
const action = createPolicy('Mike', 20);
//dispatch will pass the action(form) to each Reducer Therefore:
//AS SOON AS we run .dispatch() -> each Reducer will run and process the Action(form)
store.dispatch(action);
//we can access the Central Repository Data(STORE) by using .getState();
const data = store.getState();
console.log(data);
//{claimsHistoryReducer: Array(0), accountingReducer: 120, policyHistoryReducer: ["Mike"]}
//END: DISPATCH=======================
////MORE EXAMPLES DEFINED HERE:
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
console.log(store.getState());
//{claimsHistoryReducer: Array(0), accountingReducer: 210, policyHistoryReducer: ["Mike", "Alex", "Jim", "Bob"]}

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));
console.log(store.getState());
//{claimsHistoryReducer: [ {name: "Alex", amountOfMoneyToCollect: 120}, {name: "Jim", amountOfMoneyToCollect: 50}], 
//accountingReducer: 40, policyHistoryReducer: ["Mike", "Alex", "Jim", "Bob"]}

store.dispatch(deletePolicy('Bob'));
console.log(store.getState());
//{claimsHistoryReducer: [ {name: "Alex", amountOfMoneyToCollect: 120}, {name: "Jim", amountOfMoneyToCollect: 50}], 
//accountingReducer: 40, policyHistoryReducer: ["Mike", "Alex", "Jim"]}
