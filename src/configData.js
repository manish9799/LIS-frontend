export const baseURL = 'https://localhost:7058/api/'

export const navConfig = [
    { title: 'Home', path: '/' },
    { title: 'Analyzer', path: '/analyzer' },
    { title: 'Analyzer Parameter', path: '/analyzerParameter' },
    { title: 'CPT', path: '/CPT' },
    { title: 'LSI Code', path: '/LSICode' },
    { title: 'Test Parameter', path: '/TestParameter' },
  ];

export const analyzerTableHeadings = [
    { id: 'id', label: 'Id' },
    { id: 'name', label: 'Name' },
    { id: 'vendor', label: 'Vendor' },
    { id: 'isActive', label: 'IsActive' },
    { id: 'createdOn', label: 'CreatedOn' },
    { id: 'updatedOn', label: 'UpdatedOn' },
    { id: 'createdBy', label: 'CreatedBy' },
    { id: 'updatedBy', label: 'UpdatedBy' },
    { id: 'actions', label: 'Actions' },
  ];

export const analyzerParameterTableHeadings = [
    { id: 'id', label: 'Id' },
    { id: 'analyzerId', label: 'Analyzer Id' },
    { id: 'liscodeId', label: 'Liscode Id' },
    { id: 'lascodeId', label: 'Lascode Id' },
    { id: 'desc', label: 'Description' },
    { id: 'isActive', label: 'IsActive' },
    { id: 'createdOn', label: 'CreatedOn' },
    { id: 'updatedOn', label: 'UpdatedOn' },
    { id: 'createdBy', label: 'CreatedBy' },
    { id: 'updatedBy', label: 'UpdatedBy' },
    { id: 'actions', label: 'Actions' },
  ];

export const cptsTableHeadings = [
    { id: 'id', label: 'Id' },
    { id: 'name', label: 'Name' },
    { id: 'Description', label: 'Description' },
    { id: 'isActive', label: 'IsActive' },
    { id: 'createdOn', label: 'CreatedOn' },
    { id: 'updatedOn', label: 'UpdatedOn' },
    { id: 'createdBy', label: 'CreatedBy' },
    { id: 'updatedBy', label: 'UpdatedBy' },
    { id: 'actions', label: 'Actions' },
  ];

  export const liscodesTableHeadings = [
    { id: 'id', label: 'Id' },
    { id: 'name', label: 'Name' },
    { id: 'type', label: 'Type' },
    { id: 'desc', label: 'Description' },
    { id: 'isActive', label: 'IsActive' },
    { id: 'createdOn', label: 'CreatedOn' },
    { id: 'updatedOn', label: 'UpdatedOn' },
    { id: 'createdBy', label: 'CreatedBy' },
    { id: 'updatedBy', label: 'UpdatedBy' },
    { id: 'actions', label: 'Actions' },
  ];

  export const testParameterTableHeadings = [
    { id: 'id', label: 'Id' },
    { id: 'cptid', label: 'CPT ID' },
    { id: 'liscodeId', label: 'Liscode Id' },
    { id: 'unit', label: 'Unit' },
    { id: 'range', label: 'Range' },
    { id: 'desc', label: 'Description' },
    { id: 'isActive', label: 'IsActive' },
    { id: 'createdOn', label: 'CreatedOn' },
    { id: 'updatedOn', label: 'UpdatedOn' },
    { id: 'createdBy', label: 'CreatedBy' },
    { id: 'updatedBy', label: 'UpdatedBy' },
    { id: 'actions', label: 'Actions' },
  ];


export const data = [
    { id: 1, name: 'Amin', vendor: 'Jhon Doe',isActive:true,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 2, name: 'Ajay', vendor: 'Jhon Doe',isActive:false,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 3, name: 'Jhon', vendor: 'Jhon Doe',isActive:false,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 4, name: 'Admin', vendor: 'Jhon Doe',isActive:true,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 5, name: 'Robert', vendor: 'Jhon Doe',isActive:true,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 6, name: 'Amin', vendor: 'Jhon Doe',isActive:true,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 7, name: 'Amin', vendor: 'Jhon Doe',isActive:true,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 8, name: 'Amin', vendor: 'Jhon Doe',isActive:false,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 9, name: 'Amin', vendor: 'Jhon Doe',isActive:false,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
    { id: 10, name: 'Amin', vendor: 'Jhon Doe',isActive:true,createdOn : '2024-01-26',updatedOn : '2024-02-26', createdBy : '2024-02-26',updatedBy : '2024-02-26'},
];

