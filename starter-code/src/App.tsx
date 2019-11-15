import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Edit,
  EditSettingsModel
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };

  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <h1>Data Manager, Offline Mode, Query Parameter</h1>
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 6 }}
        editSettings={editOptions}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Edit]} />
      </GridComponent>
    </div>
  );
}

export default App;