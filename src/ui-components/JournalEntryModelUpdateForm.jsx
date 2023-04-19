/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { JournalEntryModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function JournalEntryModelUpdateForm(props) {
  const {
    id: idProp,
    journalEntryModel: journalEntryModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    gratitude: "",
    dailyGoals: "",
    affirmation: "",
    amazingMoment: "",
    improvement: "",
    notes: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [gratitude, setGratitude] = React.useState(initialValues.gratitude);
  const [dailyGoals, setDailyGoals] = React.useState(initialValues.dailyGoals);
  const [affirmation, setAffirmation] = React.useState(
    initialValues.affirmation
  );
  const [amazingMoment, setAmazingMoment] = React.useState(
    initialValues.amazingMoment
  );
  const [improvement, setImprovement] = React.useState(
    initialValues.improvement
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = journalEntryModelRecord
      ? { ...initialValues, ...journalEntryModelRecord }
      : initialValues;
    setDate(cleanValues.date);
    setGratitude(cleanValues.gratitude);
    setDailyGoals(cleanValues.dailyGoals);
    setAffirmation(cleanValues.affirmation);
    setAmazingMoment(cleanValues.amazingMoment);
    setImprovement(cleanValues.improvement);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [journalEntryModelRecord, setJournalEntryModelRecord] = React.useState(
    journalEntryModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(JournalEntryModel, idProp)
        : journalEntryModelModelProp;
      setJournalEntryModelRecord(record);
    };
    queryData();
  }, [idProp, journalEntryModelModelProp]);
  React.useEffect(resetStateValues, [journalEntryModelRecord]);
  const validations = {
    date: [{ type: "Required" }],
    gratitude: [{ type: "Required" }],
    dailyGoals: [{ type: "Required" }],
    affirmation: [{ type: "Required" }],
    amazingMoment: [{ type: "Required" }],
    improvement: [{ type: "Required" }],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date,
          gratitude,
          dailyGoals,
          affirmation,
          amazingMoment,
          improvement,
          notes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            JournalEntryModel.copyOf(journalEntryModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "JournalEntryModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              gratitude,
              dailyGoals,
              affirmation,
              amazingMoment,
              improvement,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Gratitude"
        isRequired={true}
        isReadOnly={false}
        value={gratitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              gratitude: value,
              dailyGoals,
              affirmation,
              amazingMoment,
              improvement,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.gratitude ?? value;
          }
          if (errors.gratitude?.hasError) {
            runValidationTasks("gratitude", value);
          }
          setGratitude(value);
        }}
        onBlur={() => runValidationTasks("gratitude", gratitude)}
        errorMessage={errors.gratitude?.errorMessage}
        hasError={errors.gratitude?.hasError}
        {...getOverrideProps(overrides, "gratitude")}
      ></TextField>
      <TextField
        label="Daily goals"
        isRequired={true}
        isReadOnly={false}
        value={dailyGoals}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              gratitude,
              dailyGoals: value,
              affirmation,
              amazingMoment,
              improvement,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.dailyGoals ?? value;
          }
          if (errors.dailyGoals?.hasError) {
            runValidationTasks("dailyGoals", value);
          }
          setDailyGoals(value);
        }}
        onBlur={() => runValidationTasks("dailyGoals", dailyGoals)}
        errorMessage={errors.dailyGoals?.errorMessage}
        hasError={errors.dailyGoals?.hasError}
        {...getOverrideProps(overrides, "dailyGoals")}
      ></TextField>
      <TextField
        label="Affirmation"
        isRequired={true}
        isReadOnly={false}
        value={affirmation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              gratitude,
              dailyGoals,
              affirmation: value,
              amazingMoment,
              improvement,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.affirmation ?? value;
          }
          if (errors.affirmation?.hasError) {
            runValidationTasks("affirmation", value);
          }
          setAffirmation(value);
        }}
        onBlur={() => runValidationTasks("affirmation", affirmation)}
        errorMessage={errors.affirmation?.errorMessage}
        hasError={errors.affirmation?.hasError}
        {...getOverrideProps(overrides, "affirmation")}
      ></TextField>
      <TextField
        label="Amazing moment"
        isRequired={true}
        isReadOnly={false}
        value={amazingMoment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              gratitude,
              dailyGoals,
              affirmation,
              amazingMoment: value,
              improvement,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.amazingMoment ?? value;
          }
          if (errors.amazingMoment?.hasError) {
            runValidationTasks("amazingMoment", value);
          }
          setAmazingMoment(value);
        }}
        onBlur={() => runValidationTasks("amazingMoment", amazingMoment)}
        errorMessage={errors.amazingMoment?.errorMessage}
        hasError={errors.amazingMoment?.hasError}
        {...getOverrideProps(overrides, "amazingMoment")}
      ></TextField>
      <TextField
        label="Improvement"
        isRequired={true}
        isReadOnly={false}
        value={improvement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              gratitude,
              dailyGoals,
              affirmation,
              amazingMoment,
              improvement: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.improvement ?? value;
          }
          if (errors.improvement?.hasError) {
            runValidationTasks("improvement", value);
          }
          setImprovement(value);
        }}
        onBlur={() => runValidationTasks("improvement", improvement)}
        errorMessage={errors.improvement?.errorMessage}
        hasError={errors.improvement?.hasError}
        {...getOverrideProps(overrides, "improvement")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              gratitude,
              dailyGoals,
              affirmation,
              amazingMoment,
              improvement,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || journalEntryModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || journalEntryModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
