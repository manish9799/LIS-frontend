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
      { title: 'HIS', path: '/His' },
      { title: 'HIS Analyzer', path: '/HISAnalyzer' },
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
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'vendor', label: 'Vendor' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const analyzerParameterTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'analyzerName', label: 'Analyzer Name' },
  { id: 'liscodeName', label: 'Liscode Name' },
  { id: 'lascodeId', label: 'Lascode Id' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const cptsTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'categoryId', label: 'Category Id' },
  { id: 'unitId', label: 'Unit Id' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const liscodesTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'type', label: 'Type' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testCategoriesTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'categoryName', label: 'Category Name' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testParameterTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'cptName', label: 'CPT Name' },
  { id: 'liscodeName', label: 'Liscode Name' },
  { id: 'unit', label: 'Unit' },
  { id: 'range', label: 'Range' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testSampleTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'sampleName', label: 'Sample Name' },
  { id: 'cptid', label: 'CPT Name' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testUnitTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'unit', label: 'Unit' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const pathologyPendingQueuesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'cptName', label: 'CPT Name' },
  { id: 'orderdetailId', label: 'Order Deatil ID' },
  { id: 'status', label: 'Status' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const pathologyResultDetailsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'liscodeName', label: 'LSI Name' },
  { id: 'orderDetailId', label: 'Order Deatil ID' },
  { id: 'pathologyResultMasterId', label: 'PathologyResultMaster Id' },
  { id: 'result', label: 'Result' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const pathologyResultMastersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'cptName', label: 'CPT Name' },
  { id: 'orderdetailId', label: 'Order Deatil ID' },
  { id: 'patientId', label: 'Patient Id' },
  { id: 'labId', label: 'Lab Id' },
  { id: 'status', label: 'Status' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const invoiceDetailsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'invoiceId', label: 'Invoice Id' },
  { id: 'orderId', label: 'Order Id' },
  { id: 'cptid', label: 'CPT Id' },
  { id: 'unitCost', label: 'Unit Cost' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'itemTotal', label: 'Item Total' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const invoiceMastersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'orderId', label: 'Order Id' },
  { id: 'patientId', label: 'Patient Id' },
  { id: 'invoiceTotal', label: 'Invoice Total' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const orderDetailsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'orderId', label: 'Order Id' },
  { id: 'cptid', label: 'CPT Id' },
  { id: 'cptprice', label: 'CPT Price' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const orderMastersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'userId', label: 'User Id' },
  { id: 'physician', label: 'Physician' },
  { id: 'mrn', label: 'MRN' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const genLookupsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'keyName', label: 'Key Name' },
  { id: 'value', label: 'Value' },
  { id: 'type', label: 'Type' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const modulesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'type', label: 'Type' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const roleModulesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'roleId', label: 'Role Id' },
  { id: 'moduleId', label: 'Module Id' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const rolesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'type', label: 'Type' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const usersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'email', label: 'Email' },
  { id: 'username', label: 'Username' },
  { id: 'password', label: 'Password' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const HisTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'name', label: 'Name' },
  { id: 'desc', label: 'Description' },
  { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const HisAnalyzerTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'analyzerName', label: 'Analyzer Name' },
  { id: 'hisName', label: 'HIS Name' },
  { id: 'hparamName', label: 'H Param Name' },
  { id: 'aparamName', label: 'A Param Name' },
  // { id: 'isActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];



