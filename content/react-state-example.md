---
title: 'React state management'
description: 'Managing state with React hooks'
date: '2020-01-07'
---

## React state management and dealing with changing requirements

State management is challenging, but it doesn't need to be. At my current role on the support tooling team at Disney Streaming, we have found React to be all we need to manage state for our application. Some day we may want to use a deterministic state machine like Redux, but for now we find React itself suites our needs.

The following set of examples will step through the many hooks & patterns provided by React to manage and share state.

Using the following mockup (losely based on a scenario we stumbled across) - let's see how we can iterate on how state is managed as new requirements come in.

- Clicking submit fetches some data and and displays the results

![](/use-state-beginning.png)

## UseState

Lets keep it simple for now and break this screen into two components, the Form and the Results.
The Form will manage the value inputed into the form field which will then be used to trigger the submitForm function.

```jsx
function Form({ submitForm }) {
  const [value, setValue] = useState('')
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <span className="submit-btn">
        <button onClick={e => submitForm(value)}>Submit</button>
      </span>
    </div>
  )
}
```

The result component is simply presentational.

```jsx
function Result({ results }) {
  return (
    <div>
      <div>Results: </div>
      {results.map(result => {
        return <div>{result}</div>
      })}
    </div>
  )
}
```

To wrap things up we need to account for the parent of both components above.
This is where the results will be fetched when submitting the form and shared with the Result component.

```jsx
function App() {
  const [apiResults, setResults] = useState([])
  const fetchResults = value => {
    setResults(INIT_RESULTS)
  }
  return (
    <div className="left-pane">
      <Form submitForm={fetchResults} />
      <Result results={apiResults} />
    </div>
  )
}
```

Nothing all that complicated here as we are using a few state hooks to satisfy the mockup.
Let's introduce our first change.

#### Slight modification - now we want to display the form value inside of the ResultContainer

![](/lift-state.png)

Lets _lift state up_ to the App and share between the Form and Result

```jsx
function App() {
  const [apiResults, setResults] = useState([])
  const [value, setValue] = useState('')
  const fetchResults = value => {
    setResults(INIT_RESULTS)
  }
  return (
    <div className="left-pane">
      <FormContainer submitForm={fetchResults} value={value} setValue={setValue} />
      <ResultContainer results={apiResults} value={value} />
    </div>
  )
}
```

#### Modification #2 - Assume in the future we no longer needed to display the inputted value.

Removing the value prop from Result and subsuquent code inside of Result would work just fine, for example

```jsx
<ResultContainer results={apiResults} />
```

But if Form is the only component requiring that piece of state, we should challenge ourselves to relocate that state back to the only component using it. The main thing here is maintability, although there is extra work involved it will benefit future developers by providing all of the context needed to understand the responsiblity of the Form component down the road, since it manages its own state.

## UseReducer

Let's move onto another hook, useReducer. _UseState_ and _UseReducer_ are very similar in that they can both manage complex states but _UseReducer_ can be more effective from a readability perspective as it provides:

- More control over state transitions
- reducer function to control all state updates
- dispatching pattern for those familiar with redux

Building off the example from earlier, now we want to maintain a few more fields in the form state. Let's see how we can refactor useState and take advantage of useReducer.

We have the same layout of the App component, except we introduce a reducer function which clearly defines the actions that can be used to update state.

```jsx
const intitalState = {
  value: '',
  isValid: true,
  errorMsg: null,
}

// provides access to previous value of state
function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload, isValid: validate(action.payload) }
    case 'SET_IS_VALID':
      return { ...state, isValid: action.payload }
    case 'SET_ERROR':
      return { ...state, errorMsg: action.payload }
    case 'RESET_FORM':
      return { ...intitalState }
  }
}
function App() {
  const [apiResults, setResults] = useState([])
  const [form, dispatch] = useReducer(reducer, intitalState)
  const fetchResults = () => {
    setResults(INIT_RESULTS)
  }
  const setValue = value => {
    dispatch({ type: 'SET_VALUE', payload: value })
  }
  return (
    <div className="left-pane">
      <FormContainer submitForm={fetchResults} value={form.value} setValue={setValue} />
      <ResultContainer results={apiResults} value={form.value} />
    </div>
  )
}
```

When state becomes complex and involves nested objects and/or arrays, breaking state updates down by specific actions can simplify the mental model of a component.

## UseContext

While the previous two hooks provide ways to save state, let's look at a hook that also makes it easy to share state, _UseContext_

Prop drilling is not necessarily a bad thing but as a component tree continues to grow, drilling props down a component tree may become combersome. This is because it then couples each component along the way with that value even if they may not be using it. This comes back to complicating the mental model of a component and is one extra thing to consider in each component when updating it.

When lifting state up, context allows you to share state between components in a specific tree without prop drilling.
Some things with Context to consider:

- Keep context's small and specific for easier maintainence
- Split values and value setters in seperate context's to help with readability and performance

#### Modification 3 - Now we want to be able to click on a result row in the left-pane and have that information display in the right pane.

![](/context.png)

The goal here is to take an Action in the Result component and have it updated in the Selected component.

We introduce a new component Selected to represent the right pane of screen and display the selected value.
A new state value is created in App to save the selectedValue and share between components.

There are plenty of ways to accomplish this but let's use context to share this state.
The Context provider wraps the components needing to consume from the context, so in this case Result & Selected.
Anything passed into the value prop of the Context provider, in this case the state value and setter can then shared with any child component.

#### First we create the context

```jsx
const SelectedContext = React.createContext(null)

function App() {
  const [apiResults, setResults] = useState([])
  const [form, dispatch] = useReducer(reducer, intitalState)
  // new state
  const [selectedValue, setSelectedValue] = useState('')
  const fetchResults = () => {
    setResults(INIT_RESULTS)
  }
  const setValue = value => {
    dispatch({ type: 'SET_VALUE', payload: value })
  }
  return (
    <div className="flex-container">
      <SelectedContext.Provider value={{ selectedValue, setSelectedValue }}>
        <div className="left-pane">
          <FormContainer submitForm={fetchResults} value={form.value} setValue={setValue} />
          <ResultContainer results={apiResults} />
        </div>
        <div className="right-pane">
          <Selected />
        </div>
      </SelectedContext.Provider>
    </div>
  )
}
```

#### Consume from the Context

_Selected_ is a presentational component displaying the value from the Context created above while the _Result_ pulls off the setter and uses it to set the value to send to _Selected_

```jsx
function Selected() {
  const { selectedValue } = useContext(SelectedContext)

  return (
    <div className="selected-container">
      <div>Showing all information about </div>
      <div className="selected-result">{selectedValue}</div>
    </div>
  )
}

function Result({ results }) {
  const { setSelectedValue } = useContext(SelectedContext)
  return (
    <div className="list-container">
      <div className="list-label">Results </div>
      {results.map(result => {
        return <div onClick={e => setSelectedValue(result)}>{result}</div>
      })}
    </div>
  )
}
```

#### Minor improvement Splitting values and value setters

In most scenarios this step is not needed but if you find a Context is growing, a quick way to make Context's more specific is creating an additional Context for the value setters. Most of the time, components are either consuming the state or setting the state, so no need to couple them with both if they aren't required for that component.

Another thing to note is performance. Each time a value in the Context changes, any compononent consuming from that Context will re-render, even if they are not using the value that was changed. Splitting the Context's would alleviate some of these scenarios,

This would look something like this

```jsx
<SelectedContext.Provider value={{ selectedValue }}>
  <SelectedContextActions.Provider value={{ setSelectedValue }}>
    <div className="left-pane">
      <FormContainer submitForm={fetchResults} value={form.value} setValue={setValue} />
      <ResultContainer results={apiResults} />
    </div>
    <div className="right-pane">
      <SelectedContainer />
    </div>
  </SelectedContextActions.Provider>
</SelectedContext.Provider>
```

## Composition

Instead of defaulting to using Context to share state, composition can sometimes be used to solve a similar problem.

From React docs

```

If you only want to avoid passing some props through many levels,
component composition is often a simpler solution than context.

```

Composition can increase flexibility with components as it does not couple components to a specific component tree. Where as with Context, the components consuming from the Context are required to be inside of that specific component tree (unless some refactoring is involved)

#### Solving the same problem with Composition

In most applications, passing normal props will solve this problem since it is only sending props one level down the component tree. But in this case we don't even need send props or create a Context to share these values. The state value and setters are used one level down so we can leverage composition to achieve the same thing.

Instead of passing the results and setSelectedValues prop into the Result component, we can utilize the children prop to render them.
Same goes with the Selected component, no need to send this value as a prop, we can also use the children prop.

```jsx
function App() {
  const [apiResults, setResults] = useState([])
  const [form, dispatch] = useReducer(reducer, intitalState)
  const [selectedValue, setSelectedValue] = useState('')
  const fetchResults = () => {
    setResults(INIT_RESULTS)
  }
  const setValue = value => {
    dispatch({ type: 'SET_VALUE', payload: value })
  }
  return (
    <div className="flex-container">
      <div className="left-pane">
        <Form submitForm={fetchResults} value={form.value} setValue={setValue} />
        <Result>
          {apiResults.map(result => {
            return <div onClick={e => setSelectedValue(result)}>{result}</div>
          })}
        </Results>
      </div>
      <div className="right-pane">
        <Selected>
          <div className="selected-result">{selectedValue}</div>
        </Selected>
      </div>
    </div>
  )
}
```

Now the Selected & Result components are basic presentational/layout components and render whatever is sent in as children. This comes in handy when we want to share a common Result component across an application, the Result component can worry about giving the common look & feel and the component needing this look & feel can just inject whatever children it needs to the component.

```jsx
function Selected({ children }) {
  return (
    <div className="selected-container">
      <div>Showing all information about </div>
      {children}
    </div>
  )
}
```

```jsx
function Result({ children }) {
  return (
    <div className="list-container">
      <div className="list-label">Results: </div>
      {children}
    </div>
  )
}
```

## Conclusion

We have looked at a few ways to manage and share state with React. When it comes to managing state, keeping a components mental model in mind is something to consider as we refactor code during product changes.
