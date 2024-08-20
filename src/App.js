import React from 'react';
import GoogleSuggestions from './components/GoogleSuggestions';

const suggestionsList = [
  { id: 1, suggestion: 'React' },
  { id: 2, suggestion: 'JavaScript' },
  { id: 3, suggestion: 'CSS' },
  { id: 4, suggestion: 'HTML' },
  { id: 5, suggestion: 'Node.js' },
  { id: 6, suggestion: 'Python' },
];

function App() {
  return (
    <div className="App">
      <GoogleSuggestions suggestionsList={suggestionsList} />
    </div>
  );
}

export default App;
