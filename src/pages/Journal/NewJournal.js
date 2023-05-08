import "./NewJournal.css";
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { JournalEntryModel } from "../../models";
import Form from "react-bootstrap/Form";
import journalPic from "../../components/images/journal-pic.png";

export default function NewJournalPage() {
  const [formValues, setFormValues] = useState({
    date: new Date().toLocaleString([], { month: "numeric", year: "numeric", day: '2-digit', hour: '2-digit', minute: '2-digit' }),
    gratitude: null,
    dailyGoals: null,
    affirmation: null,
    amazingMoment: null,
    improvement: null,
    notes: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const now = new Date();
        const awsDate = now.toISOString().slice(0, 10);
        const post = await DataStore.save(
          new JournalEntryModel({
            date: awsDate,
            ...formValues,
          })
        );
        console.log("post saved successfully!", post);
      setFormValues({
        gratitude: "",
        dailyGoals: "",
        affirmation: "",
        amazingMoment: "",
        improvement: "",
        notes: "",
      });
    } catch (error) {
      console.log("error saving journal entry", error);
    }
  };

  return (
    <>
      <div className="journal-header">
        <div className="page-container">
          <form
            id="journalForm"
            onSubmit={handleSubmit}
            className="form-container"
          >
            <Form.Group>
              <Form.Label>Date: {formValues.date}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="gratitude">
              <Form.Label>I am grateful for...</Form.Label>
              <Form.Control
                as="textarea"
                name="gratitude"
                onChange={handleChange}
                placeholder="enter response here"
                className="text-area"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dailyGoals">
              <Form.Label>what would make today great?</Form.Label>
              <Form.Control
                as="textarea"
                name="dailyGoals"
                onChange={handleChange}
                placeholder="enter response here"
                className="text-area"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="affirmation">
              <Form.Label>daily affirmation:</Form.Label>
              <Form.Control
                as="textarea"
                name="affirmation"
                onChange={handleChange}
                placeholder="enter response here"
                className="text-area"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amazingMoment">
              <Form.Label>what amazing thing happened today?</Form.Label>
              <Form.Control
                as="textarea"
                name="amazingMoment"
                onChange={handleChange}
                placeholder="enter response here"
                className="text-area"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="improvement">
              <Form.Label>how could I have made today even better?</Form.Label>
              <Form.Control
                as="textarea"
                name="improvement"
                onChange={handleChange}
                placeholder="enter response here"
                className="text-area"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="notes">
              <Form.Label>notes:</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                onChange={handleChange}
                placeholder="enter response here"
                className="text-area"
              />
            </Form.Group>
          </form>
          <img src={journalPic} alt="journal pic" className="journal-pic" />
          <button type="submit" form="journalForm" className="submit-button">
            CREATE
          </button>
        </div>
      </div>
    </>
  );
}
