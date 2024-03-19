1. Logic ---> within components;

with reducer --> we move the logic outside of componenet
Ideally component should generally do the work of
rendering stuff;

Because it becomes easier when you divide it into 
smaller pieces;

2. NOTES----->
 making reducer function to called action obj as an paramtere
 dispatch(argument)---> argument == action {}
 reducer (param1=initialstate, param2=action {})
 action is JS Obj {}---> {type,payload} as a key here 
   1. how state is update here-
 you called and dispatch function with action object

   2. reducerFunction---
 a.it is a js function (which we describes / write)
 b. it is a pure function (
    -- which dosenot have any side effects
      -- side effects--> it doesnt change anythingoutside of its scope.
    -- takes an input return and certain output.
    --dosnot change anything ouside of its scope,
      not possess any network requests                    
   )
 c .it takes current state and action object as argument.
 d. it return some value--> that value will be your updated state;
  
3. initial state--
 what ever the value of initial state is:
    
4. state --- 
current value of state.
  
5. dispatch --
a. function which updates the value of state.
 b. dipacth takes `action` object as argument.
    -- i. action object
    -- its a javascrit object {}
            -- it contains key- value pairs.
              - type: "string which describes user intent"
              - payload: optional ...

   ****FLOW of USEREDUCER****
   
INC Button Click --> dispatch({type:"INC_COUNT"}) --> reducer(0,{type:
    "INC_COUNT"}) --> reducer returns 1 --> 1 (whatever reducer returns) 
    becomes updated state;

 --- how state update work- invoking dispatch function with action objet
    dispatch will call reduer-->reducer will rreturn a new value-->
    the new value become your updated state.
 
6. How its is Helpful:
This useReducer can be super helpful when you have many functions which is updating your one state value;
7. 
related data-- useReducer and network request example;
8. Beneifit of using useReducer

O : Orgainzation of Code (especially when the state is complex)
  -Readability

p : Predictibility
  -Easy to Predict (what is the state at what point)

T : Testability
 -test cases (writing this test cases are simpler)

