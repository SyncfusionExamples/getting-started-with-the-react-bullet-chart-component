import './App.css';
import { BulletChartComponent, BulletRangeCollectionDirective, BulletRangeDirective, BulletTooltip, Inject } from '@syncfusion/ej2-react-charts';
function App() {
  const chartData = [
    {value: '270', target: '250'},
    {value: '180', target: '100'}
  ]
  return (
    <div className="App" style={{width:"650px",height:"100px"}}>
      <BulletChartComponent dataSource={chartData}
        width="80%"
        height='90%'
        tooltip={{enable: true}}  
        title="Revenue"
        subtitle='(in dollars $)'
        valueField="value"
        targetField='target'
        minimum={0}
        maximum={300}
        interval={50}>
          <Inject services={[BulletTooltip]}></Inject>
          <BulletRangeCollectionDirective>
            <BulletRangeDirective end={150} color="Red"></BulletRangeDirective>
            <BulletRangeDirective end={250}></BulletRangeDirective>
            <BulletRangeDirective end={300} color="Blue"></BulletRangeDirective>
          </BulletRangeCollectionDirective>
        </BulletChartComponent>
    </div>
  );
}

export default App;
