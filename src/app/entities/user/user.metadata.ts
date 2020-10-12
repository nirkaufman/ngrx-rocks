import {EntityMetadata} from "@ngrx/data";

function sortUserName(a, b) {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return  0
}

export const userMetadata: EntityMetadata = {
  entityName: 'User',
  sortComparer: sortUserName,
  entityDispatcherOptions: {
    optimisticAdd: true,
    optimisticUpdate: true,
    optimisticSaveEntities: false
  }
}
