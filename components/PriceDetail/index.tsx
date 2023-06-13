import { IItem } from "../../typings/common";
import LineChart from 'bizcharts/lib/plots/LineChart';
import styles from './index.module.css';
const tempData = {
  data: [
    { month: '1月', value: 100 },
    { month: '2月', value: 101 },
    { month: '3月', value: 130.5 },
    { month: '4月', value: 102 },
    { month: '5月', value: 103.9 },
  ],
  title: {
    visible: true,
    text: '商品价格曲线',
  },
  meta: {
    month: {
      alias: '月'
    },
    value: {
      alias: '价格',
      formatter: (v: number) => { return `${v}元` }
    }
  },
  xField: 'month',
  yField: 'value',
  color: '#0079f2',
  label: {
    visible: true,
  },
  width: 200,
  height: 100
};
export default function PriceDetail(props: { data: IItem }) {
  return (
    <div className={styles.box}>
      <LineChart {...tempData} />
    </div>
  )
}