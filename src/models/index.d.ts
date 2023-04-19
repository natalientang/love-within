import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerJournalEntryModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JournalEntryModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly gratitude: string;
  readonly dailyGoals: string;
  readonly affirmation: string;
  readonly amazingMoment: string;
  readonly improvement: string;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJournalEntryModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JournalEntryModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly gratitude: string;
  readonly dailyGoals: string;
  readonly affirmation: string;
  readonly amazingMoment: string;
  readonly improvement: string;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JournalEntryModel = LazyLoading extends LazyLoadingDisabled ? EagerJournalEntryModel : LazyJournalEntryModel

export declare const JournalEntryModel: (new (init: ModelInit<JournalEntryModel>) => JournalEntryModel) & {
  copyOf(source: JournalEntryModel, mutator: (draft: MutableModel<JournalEntryModel>) => MutableModel<JournalEntryModel> | void): JournalEntryModel;
}