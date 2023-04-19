import logo from "../logo.svg"
import  { JournalEntryModel } from "../models/";
import { DataStore } from "aws-amplify";

// Create a function with this code:
async function testEntry(){
try {
  const now = new Date();
  const awsDate = now.toISOString().slice(0, 10);
  const post = await DataStore.save(
    new JournalEntryModel({
      date: awsDate,
      gratitude: "test",
      dailyGoals: "test",
      affirmation: "test",
      amazingMoment: "test",
      improvement: "test",
      notes: "test"
    })
  );
  console.log('Post saved successfully!', post);
} catch (error) {
  console.log('Error saving post', error);
}
}

// Create a button to where if we click it, it executes the function

export default function MainPage() {
    return (
        <>
            <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React

            </a>
            <button onClick={testEntry}>
                click
              </button>
          </header>
        </div>
        </>
    )
};
