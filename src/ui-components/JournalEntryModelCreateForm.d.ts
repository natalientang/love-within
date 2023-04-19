/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JournalEntryModelCreateFormInputValues = {
    date?: string;
    gratitude?: string;
    dailyGoals?: string;
    affirmation?: string;
    amazingMoment?: string;
    improvement?: string;
    notes?: string;
};
export declare type JournalEntryModelCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    gratitude?: ValidationFunction<string>;
    dailyGoals?: ValidationFunction<string>;
    affirmation?: ValidationFunction<string>;
    amazingMoment?: ValidationFunction<string>;
    improvement?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JournalEntryModelCreateFormOverridesProps = {
    JournalEntryModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    gratitude?: PrimitiveOverrideProps<TextFieldProps>;
    dailyGoals?: PrimitiveOverrideProps<TextFieldProps>;
    affirmation?: PrimitiveOverrideProps<TextFieldProps>;
    amazingMoment?: PrimitiveOverrideProps<TextFieldProps>;
    improvement?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JournalEntryModelCreateFormProps = React.PropsWithChildren<{
    overrides?: JournalEntryModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JournalEntryModelCreateFormInputValues) => JournalEntryModelCreateFormInputValues;
    onSuccess?: (fields: JournalEntryModelCreateFormInputValues) => void;
    onError?: (fields: JournalEntryModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JournalEntryModelCreateFormInputValues) => JournalEntryModelCreateFormInputValues;
    onValidate?: JournalEntryModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function JournalEntryModelCreateForm(props: JournalEntryModelCreateFormProps): React.ReactElement;
