"use client"; // this is a client component
import { useEffect, useState } from 'react'
import Item from '../../components/Item'
import { Search } from '@alifd/next';
import styles from './page.module.css';
import { IItem } from '../../typings/common';


const mockItems:IItem[]=[{
  name:'测试商品，商品0',
  price:100,
  image:'https://img.alicdn.com/imgextra/i2/O1CN01FgCVkH1WC0P2x8ycI_!!6000000002751-2-tps-866-1066.png',
  url:'https://img.alicdn.com/imgextra/i2/O1CN01FgCVkH1WC0P2x8ycI_!!6000000002751-2-tps-866-1066.png',
},{
  name:'测试商品，商品1',
  price:100,
  image:'https://img.alicdn.com/imgextra/i2/O1CN01FgCVkH1WC0P2x8ycI_!!6000000002751-2-tps-866-1066.png',
  url:'https://img.alicdn.com/imgextra/i2/O1CN01FgCVkH1WC0P2x8ycI_!!6000000002751-2-tps-866-1066.png',
}]
export default function Home() {
  const [items,setItems]=useState(mockItems)
  useEffect(()=>{
  },[])
  const onSearch=()=>{
    //得到商品数据
    //setItems([])
  }
  return (
   <div>
    <div className={styles.search}>
    <Search onSearch={onSearch} style={{ width: "400px" }} />,
    </div>
    <div className={styles.itemContainer}>
      {items.map(item=>{
        return <Item key={item.name} data={item}></Item>
      })}
    </div>
   </div>
  )
}
