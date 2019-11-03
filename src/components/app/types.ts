import { FunctionComponent } from "react";
import { RouteComponentProps } from "react-router";

export interface ActivityDefinition<T extends NonNullable<unknown> = {}> {
    Component: FunctionComponent<T>;
    decoder(props: RouteComponentProps<{ [key: string]: string | undefined }>): T | null;
}
