import {EntityMetadataMap} from "@ngrx/data";
import {userMetadata} from "./user/user.metadata";

// index for all entities metadata configurations
export const entityMetadata: EntityMetadataMap = {
  User: userMetadata,
}
