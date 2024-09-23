// backend/src/helpers/returnDTO.ts

type DTOOptions = {
    excludeFields?: string[];
    includeFields?: string[];
  };
  
  export const returnDTO = (entity: any, options: DTOOptions = {}): Record<string, any> => {
    const object = entity.toObject ? entity.toObject() : entity;
    const { excludeFields, includeFields } = options;
  
    if (excludeFields && includeFields) {
      throw new Error("Specify either 'excludeFields' or 'includeFields', not both.");
    }
  
    // Use includeFields if provided
    if (includeFields) {
      return includeFields.reduce((result, field) => {
        if (field in object) result[field] = object[field];
        return result;
      }, {} as Record<string, any>);
    }
  
    // Use excludeFields if provided
    if (excludeFields) {
      const excludeSet = new Set(excludeFields);
      return Object.keys(object).reduce((result, field) => {
        if (!excludeSet.has(field)) result[field] = object[field];
        return result;
      }, {} as Record<string, any>);
    }
  
    return object;
  };
  


//   usage example 
// Exclude Fields:
// const userDTO = returnDTO(newUser, { excludeFields: ['password', '__v'] });
// Include Fields:
// const userDTO = returnDTO(newUser, { includeFields: ['name', 'email'] });
// Return Entire Object:
// const userDTO = returnDTO(newUser);
