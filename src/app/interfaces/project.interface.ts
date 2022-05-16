import { User } from "./user.interface";

export interface Project {
    id_project:          number;
    name_project:        string;
    description_project: string;
    state_project:       string;
    startdate_project:   Date;
    enddate_project:     Date;
    id_user_admin:       number;
}