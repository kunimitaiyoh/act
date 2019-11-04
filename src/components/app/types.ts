import { FunctionComponent } from "react";
import { RouteComponentProps } from "react-router";

export interface ActivityDefinition<T extends NonNullable<unknown> = {}> {
  decoder(props: RouteComponentProps<Dictionary>): T | null;
  Component: FunctionComponent<RouteComponentProps<Dictionary> & { params: T }>;
}

export type Dictionary = { [key: string]: string | undefined };
