export const baseURL = 'https://localhost:7058/api/'

export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Services',
    children: [
      { title: 'Analyzer', path: '/analyzer' },
      { title: 'Analyzer Parameter', path: '/analyzerParameter' },
      { title: 'CPT', path: '/CPT' },
      { title: 'LIS Code', path: '/LISCode' },
    ]
  },
  {
    title: 'Tests',
    children: [
      { title: 'Test Categories', path: '/TestCategories' },
      { title: 'Test Parameters', path: '/TestParameters' },
      { title: 'Test Samples', path: '/TestSamples' },
      { title: 'Test Units', path: '/TestUnits' },
    ]
  },
  {
    title: 'Pathology',
    children: [
      { title: 'Pathology Pending Queues', path: '/PathologyPendingQueues' },
    { title: 'Pathology Result Details', path: '/PathologyResultDetails' },
    { title: 'Pathology Result Masters', path: '/PathologyResultMasters' },
    ]
  },
  {
    title: 'Invoice/Orders',
    children: [
      { title: 'Invoice Details', path: '/InvoiceDetails' },
  { title: 'Invoice Masters', path: '/InvoiceMasters' },
  { title: 'Order Details', path: '/OrderDetails' },
  { title: 'Order Masters', path: '/OrderMasters' },
    ]
  },
  {
    title: 'Others',
    children: [
      { title: 'Gen Lookups', path: '/GenLookups' },
      { title: 'Modules', path: '/Modules' },
      { title: 'Role Modules', path: '/RoleModules' },
      { title: 'Roles', path: '/Roles' },
      { title: 'Users', path: '/Users' },
    ]
  },
];

//  export const childNav = [
//     { title: 'Analyzer', path: '/analyzer' },
//     { title: 'Analyzer Parameter', path: '/analyzerParameter' },
//     { title: 'CPT', path: '/CPT' },

//     { title: 'LIS Code', path: '/LISCode' },

//     { title: 'Gen Lookups', path: '/GenLookups' },
//     { title: 'Invoice Details', path: '/InvoiceDetails' },
//     { title: 'Invoice Masters', path: '/InvoiceMasters' },
//     { title: 'Modules', path: '/Modules' },
//     { title: 'Role Modules', path: '/RoleModules' },
//     { title: 'Roles', path: '/Roles' },
//     { title: 'Order Details', path: '/OrderDetails' },
//     { title: 'Order Masters', path: '/OrderMasters' },
//     { title: 'Pathology Pending Queues', path: '/PathologyPendingQueues' },
//     { title: 'Pathology Result Details', path: '/PathologyResultDetails' },
//     { title: 'Pathology Result Masters', path: '/PathologyResultMasters' },
//     { title: 'Test Categories', path: '/TestCategories' },
//     { title: 'Test Parameters', path: '/TestParameters' },
//     { title: 'Test Samples', path: '/TestSamples' },
//     { title: 'Test Units', path: '/TestUnits' },
//     { title: 'Users', path: '/Users' },
// ]

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



