import React from 'react';
import './App.css';
import ErrorBoundary from './uiCompontents/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';

function App() {
  const defaultValue = 9;
  //const maxValue = 50;
  //maxValue should be used to show/hide the button if numberOfUsers >= maxValue
  const [numberOfUsers, setNumberOfUsers] = React.useState(defaultValue);

  return (
    <>
      <ErrorBoundary>
        <Header text={'RandomUsers'} />
        <main id="main-content" className="h-auto flex flex-col align-center">
          <UserList quantity={numberOfUsers} />
          <div className="flex flex-col md:flex-row p-8">
            <span className="text-center md:text-right wfull md:w-1/2 p-2 md:pr-8">
              {`Showing ${numberOfUsers} users`}
            </span>
            {/* button could be a separate component, in a larger soloution */}
            <button
              onClick={() => setNumberOfUsers(numberOfUsers + defaultValue)}
              className=" btn border-black rounded-sm bg-black text-white w-full md:w-1/6 p-2 justify-center"
            >
              Load more
            </button>
          </div>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
