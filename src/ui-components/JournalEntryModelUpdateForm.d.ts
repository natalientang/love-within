/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { JournalEntryModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JournalEntryModelUpdateFormInputValues = {
    date?: string;
    gratitude?: string;
    dailyGoals?: string;
    affirmation?: string;
    amazingMoment?: string;
    improvement?: string;
    notes?: string;
};
export declare type JournalEntryModelUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    gratitude?: ValidationFunction<string>;
    dailyGoals?: ValidationFunction<string>;
    affirmation?: ValidationFunction<string>;
    amazingMoment?: ValidationFunction<string>;
    improvement?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JournalEntryModelUpdateFormOverridesProps = {
    JournalEntryModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    gratitude?: PrimitiveOverrideProps<TextFieldProps>;
    dailyGoals?: PrimitiveOverrideProps<TextFieldProps>;
    affirmation?: PrimitiveOverrideProps<TextFieldProps>;
    amazingMoment?: PrimitiveOverrideProps<TextFieldProps>;
    improvement?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JournalEntryModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: JournalEntryModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    journalEntryModel?: JournalEntryModel;
    onSubmit?: (fields: JournalEntryModelUpdateFormInputValues) => JournalEntryModelUpdateFormInputValues;
    onSuccess?: (fields: JournalEntryModelUpdateFormInputValues) => void;
    onError?: (fields: JournalEntryModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JournalEntryModelUpdateFormInputValues) => JournalEntryModelUpdateFormInputValues;
    onValidate?: JournalEntryModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JournalEntryModelUpdateForm(props: JournalEntryModelUpdateFormProps): React.ReactElement;
